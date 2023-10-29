import Explore from '@/components/HomePage/Discover';
import HeroBanner from '@/components/HomePage/HeroBanner';

export default async function Home() {
  return (
    <>
      <HeroBanner />
      <Explore />;
    </>
  );
}
