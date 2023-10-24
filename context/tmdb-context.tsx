import { BASE_URL } from '@/utils/constants';
import React from 'react';
import useSWR from 'swr';

const TmdbContext = React.createContext({ url: {}, genres: {} });

export const TmdbContextProvider = (props: any) => {
  const { data: url } = useSWR(`${BASE_URL}/configuration`);
  console.log(url);

  return (
    <TmdbContext.Provider value={{ url: url, genres: {} }}>
      {props.children}
    </TmdbContext.Provider>
  );
};
