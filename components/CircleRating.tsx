import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleRating = ({
  rating,
  className,
}: {
  rating: number;
  className: string;
}) => {
  return (
    <div
      className={
        'flex h-[40px] w-[40px] shrink-0 rounded-full bg-white p-[2px]' +
        ' ' +
        className
      }
    >
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={String(rating)}
        styles={buildStyles({
          pathColor: rating < 5 ? 'red' : rating < 7 ? 'orange' : 'green',
          textColor: '#000',
          textSize: '34px',
          trailColor: 'transparent',
        })}
      />
    </div>
  );
};

export default CircleRating;
