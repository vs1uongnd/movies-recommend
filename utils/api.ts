import { BASE_URL, API_TOKEN } from './constants';

const headers = {
  Authorization: 'bearer ' + API_TOKEN,
};

export const fetcher = (url: string) =>
  fetch(url, {
    headers,
  }).then((res) => res.json());
