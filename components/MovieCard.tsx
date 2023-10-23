import PosterFallback from '../assets/no-poster.png';
import Image from 'next/image';

const MovieCard = ({ data }) => {
  //   const { url } = useSelector((state) => state.home);
  const url = {
    backdrop: 'https://image.tmdb.org/t/p/original',
    poster: 'https://image.tmdb.org/t/p/original',
    profile: 'https://image.tmdb.org/t/p/original',
  };
  //   const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  console.log(posterUrl);
  return (
    <div
      className='movieCard'
      //   onClick={() => navigate(`/${data.media_type}/${data.id}`)}
    >
      <div className='posterBlock'>
        <img src={posterUrl} alt='' />
        {/* {!fromSearch && (
          <React.Fragment>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )} */}
      </div>
      <div className='textBlock'>
        <span className='title'>{data.title || data.name}</span>
        <span className='date'>
          {/* {dayjs(data.release_date).format('MMM D, YYYY')} */}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
