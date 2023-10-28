import DetailSingleMovie from '@/components/SingleMoviePage/DetailSingleMovie';
import { getData } from '@/utils/api';
import { SingleMovie } from '@/utils/types';

export default async function SingleMovie({
  params,
}: {
  params: { slug: string };
}) {
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
}
