import useSWR from 'swr';
import { BASE_URL, headers } from './constants';

export const getData = async (
  path: string,
  options?: { method?: 'GET' | 'POST' | 'DELETE' | 'PUT'; body?: string }
) => {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: headers,
      ...options,
    });
    const data = await res.json();
    if (data?.success === false) throw new Error(data.status_message);
    return data;
  } catch (error) {
    throw error;
  }
};

// Client Component
export const fetcher = async (url: string) => {
  try {
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error('Something went wrong with the request');
    return res.json();
  } catch (error) {
    throw error;
  }
};

export const useGenres = () => {
  const { data }: { data: { genres: Array<{ id: number; name: string }> } } =
    useSWR(`${BASE_URL}/genre/movie/list`, fetcher);
  return { data };
};

export const useApiConfig = () => {
  const { data, isLoading } = useSWR(`${BASE_URL}/configuration`, fetcher);
  return { data: data?.images?.base_url, isLoading };
};
