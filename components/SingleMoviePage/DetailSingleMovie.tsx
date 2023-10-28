import { Credits, Crew, SingleMovie } from '@/utils/types';
import dayjs from 'dayjs';
import Genres from '../Global/Genres';
import CircleRating from '../Global/CircleRating';
import { convertToHoursAndMinutes } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';

const DetailSingleMovie = async ({
  movie,
  credits,
  baseImgUrl,
}: {
  movie: SingleMovie;
  credits: Credits;
  baseImgUrl: string;
}) => {
  const {
    poster_path,
    backdrop_path,
    genres,
    vote_average,
    overview,
    status,
    release_date,
    runtime,
    created_by,
    name,
    title,
    tagline,
    imdb_id,
  } = movie;
  const { cast, crew } = credits;
  const posterUrl =
    poster_path && baseImgUrl
      ? baseImgUrl + 'original' + poster_path
      : '../../assets/no-poster.png';
  let director: Crew[] = [];
  let writer: Crew[] = [];
  crew.forEach((person) => {
    if (person.job === 'Director') director.push(person);
    if (
      person.job === 'Screenplay' ||
      person.job === 'Story' ||
      person.job === 'Writer'
    )
      writer.push(person);
  });

  return (
    <div className='relative py-16'>
      <div className='absolute left-0 top-0 h-full w-full overflow-hidden opacity-10'>
        {baseImgUrl && (
          <Image
            src={baseImgUrl + 'original' + backdrop_path}
            alt={title}
            fill={true}
            className='object-cover object-center'
          />
        )}
      </div>

      <div className='content relative z-10 mx-auto flex max-w-[1200px] flex-col gap-6 px-5 md:flex-row md:justify-between md:gap-12'>
        <div className='flex justify-center md:items-start'>
          <Image
            className='posterImg block max-w-[350px] rounded-xl object-cover object-center'
            src={posterUrl}
            alt={title}
            width={300}
            height={500}
          />
        </div>
        <div className='text-white'>
          <div className='text-3xl md:text-4xl'>
            {`${name || title} (${dayjs(release_date).format('YYYY')})`}
          </div>
          <div className='mb-4 italic opacity-50 md:text-xl'>{tagline}</div>

          <Genres genres={genres} className='mb-6' />

          <div className='mb-6 flex items-center gap-4 '>
            <CircleRating
              rating={Number(vote_average.toFixed(1))}
              className='h-[70px] w-[70px] bg-transparent'
              textColor='#fff'
              trailColor='#041226'
            />
            <Link
              href={`https://www.imdb.com/title/${imdb_id}/`}
              className='text-color-primary underline underline-offset-4'
              target='blank'
            >
              Check in IMDB now!
            </Link>
          </div>
          <p className='description mb-6'>{overview}</p>
          <div className='flex gap-5 border-b border-solid border-white/10 py-4'>
            {status && (
              <div>
                <span className='mr-2 font-[600]'>Status: </span>
                <span className='whitespace-nowrap opacity-50'>{status}</span>
              </div>
            )}
            {release_date && (
              <div>
                <span className='mr-2 font-[600]'>Release Date: </span>
                <span className='whitespace-nowrap opacity-50'>
                  {dayjs(release_date).format('MMM D, YYYY')}
                </span>
              </div>
            )}
            {runtime && (
              <div>
                <span className='mr-2 font-[600]'>Runtime: </span>
                <span className='whitespace-nowrap opacity-50'>
                  {convertToHoursAndMinutes(runtime)}
                </span>
              </div>
            )}
          </div>
          {director?.length > 0 && (
            <div className='flex gap-5 border-b border-solid border-white/10 py-4'>
              <div>
                <span className='mr-2 font-[600]'>Director: </span>
                <span className='opacity-50'>
                  {director?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {director.length - 1 !== i && ', '}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          )}

          {writer?.length > 0 && (
            <div className='flex gap-5 border-b border-solid border-white/10 py-4'>
              <div>
                <span className='mr-2 font-[600]'>Writer: </span>
                <span className='opacity-50'>
                  {writer?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {writer.length - 1 !== i && ', '}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          )}

          {created_by && (
            <div className='flex gap-5 border-b border-solid border-white/10 py-4'>
              <div>
                <span className='mr-2 font-[600]'>Creator: </span>
                <span className='opacity-50'>
                  {created_by?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {created_by.length - 1 !== i && ', '}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          )}

          {cast && (
            <div className='flex gap-5 border-b border-solid border-white/10 py-4'>
              <div>
                <span className='mr-2 font-[600]'>Cast: </span>
                <span className='opacity-50'>
                  {cast?.map((d, i) => (
                    <span key={i}>
                      {d.name}
                      {cast.length - 1 !== i && ', '}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailSingleMovie;
