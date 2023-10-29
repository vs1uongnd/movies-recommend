import DetailSingleMovie from '@/components/SingleMoviePage/DetailSingleMovie';
import Error from '@/components/Global/Error';
import { getData } from '@/utils/api';
import { SingleMovie } from '@/utils/types';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function SingleMovie({
  params,
}: {
  params: { slug: string };
}) {
  const cookieStore = cookies();
  if (!cookieStore.get('sessionId')) redirect('/sign-in');
  try {
    const movieDetail = await getData(`/movie/${params.slug}`);
    const credits = await getData(`/movie/${params.slug}/credits`);
    const apiConfig = await getData('/configuration');
    const baseImgUrl = apiConfig?.images?.base_url;

    return (
      <DetailSingleMovie
        movie={movieDetail}
        credits={credits}
        baseImgUrl={baseImgUrl}
      />
    );
  } catch (err: any) {
    return <Error message={err.message} />;
  }
}
