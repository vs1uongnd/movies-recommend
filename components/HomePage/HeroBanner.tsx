'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useApiConfig, fetcher } from '@/utils/api';
import useSWR from 'swr';
import { BASE_URL } from '@/utils/constants';
import exp from 'constants';

const HeroBanner = () => {
  const [query, setQuery] = useState<string>('');
  const [heroBannerImg, setHeroBannerImg] = useState<string>('');
  const router = useRouter();
  const { data, isLoading, error } = useSWR(
    `${BASE_URL}/discover/movie`,
    fetcher
  );
  const { data: baseImgUrl } = useApiConfig();
  useEffect(() => {
    if (baseImgUrl && data) {
      setHeroBannerImg(
        baseImgUrl +
          'original' +
          data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
      );
    }
  }, [baseImgUrl, data]);
  const searchQueryHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (query.trim() !== '') {
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className='relative flex h-[90vh] w-full items-center'>
      {!isLoading && !error && heroBannerImg && (
        <Image
          src={heroBannerImg}
          alt='hero-banner'
          fill={true}
          className='absolute left-0 top-0 h-full w-full object-cover object-center opacity-30'
        />
      )}

      <div className='opacity-layer'></div>
      <div className='z-10 mx-auto flex max-w-3xl flex-col items-center px-5 text-center'>
        <h1 className='mb-8 text-[40px] font-bold leading-tight	 text-color-primary md:text-[60px]'>
          Exploring the world through movies
        </h1>
        <form
          className='flex w-full items-center'
          onSubmit={searchQueryHandler}
        >
          <input
            type='text'
            placeholder='Search for a movie'
            onChange={(e) => setQuery(e.target.value)}
            className='h-[50px] flex-grow rounded-l-3xl border-none px-8 outline-none'
          />
          <button className='button-primary h-[50px] !rounded-l-none !rounded-r-3xl'>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroBanner;
