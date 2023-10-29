import Explore from '@/components/HomePage/Discover';
import HeroBanner from '@/components/HomePage/HeroBanner';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = cookies();
  if (!cookieStore.get('sessionId')) redirect('/sign-in');
  return (
    <>
      <HeroBanner />
      <Explore />;
    </>
  );
}
