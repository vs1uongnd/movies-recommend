import useSWR from 'swr';
import { BASE_URL, headers } from './constants';

export const fetcher = (url: string) =>
  fetch(url, {
    headers,
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Something went wrong with the request');
    }
    return res.json();
  });

// Server Component
export async function getData(path: string) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: headers,
  });

  if (!res.ok) {
    throw new Error('Something went wrong with the request');
  }

  return res.json();
}

// Client Component
export const useGenres = () => {
  const { data }: { data: { genres: Array<{ id: number; name: string }> } } =
    useSWR(`${BASE_URL}/genre/movie/list`, fetcher);
  return { data };
};

export const useApiConfig = () => {
  const { data, isLoading } = useSWR(`${BASE_URL}/configuration`, fetcher);
  return { data: data?.images?.base_url, isLoading };
};
