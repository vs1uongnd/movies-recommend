import Explore from '@/components/HomePage/Discover';
import HeroBanner from '@/components/HomePage/HeroBanner';
import { checkSignInServer } from '@/utils/checkCookieServer';
import { redirect } from 'next/navigation';

export default async function Home() {
  if (!checkSignInServer()) redirect('/sign-in');
  return (
    <>
      <HeroBanner />
      <Explore />;
    </>
  );
}
