import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({
  src,
  className,
  alt,
}: {
  src: any;
  className?: string;
  alt: string;
}) => {
  return (
    <LazyLoadImage className={className} alt={alt} effect='blur' src={src} />
  );
};

export default LazyImage;
