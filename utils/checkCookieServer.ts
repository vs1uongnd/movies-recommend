import { cookies } from 'next/headers';
export const checkSignInServer = () => {
  const cookieStore = cookies();
  return cookieStore.get('sessionId');
};
