import useSWR from 'swr';
import { fetcher } from '../utils/api';
import { BASE_URL } from '@/utils/constants';

export const useGenre = () => {
  const { data }: { data: { genres: Array<{ id: number; name: string }> } } =
    useSWR(`${BASE_URL}/genre/movie/list`, fetcher);
  return { data };
};

export const useApiConfig = () => {
  const { data } = useSWR(`${BASE_URL}/configuration`, fetcher);
  return { data: data?.images?.base_url };
};
