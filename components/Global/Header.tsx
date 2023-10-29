'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { hasCookie } from 'cookies-next';
import { deleteCookie } from 'cookies-next';

const navItems = [
  { name: 'Home', pathname: '/' },
  { name: 'Popular & Trending', pathname: '/popular-trending' },
  { name: 'Upcoming', pathname: '/upcoming' },
];

const Header = () => {
  const pathname = usePathname();
  const [menuMobileOpened, setMenuMobileOpened] = useState(false);
  // const cookies = useCookies();
  const router = useRouter();

  return (
    <header className='fixed left-0 top-0 z-20 w-full border-b border-gray-600 bg-gray-900'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link href='/' className='flex items-center'>
          <span className='self-center whitespace-nowrap text-2xl font-semibold text-white'>
            MoviesRec
          </span>
        </Link>
        <div className='flex md:order-2'>
          {!hasCookie('sessionId') ? (
            <Link
              href='/sign-in'
              type='button'
              className='button-primary mr-3 md:mr-0'
            >
              Get started
            </Link>
          ) : (
            <button
              type='button'
              className='button-primary mr-3 md:mr-0'
              onClick={() => {
                deleteCookie('sessionId');
                router.push('/sign-in');
              }}
            >
              Sign out
            </button>
          )}
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700  md:hidden'
            aria-controls='navbar-sticky'
            onClick={() => setMenuMobileOpened((state) => !state)}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuMobileOpened ? 'block' : 'hidden'
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col rounded-lg border  border-gray-700  bg-gray-800 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900  md:p-0'>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.pathname}
                  className={`block rounded border-gray-700 py-2 pl-3 pr-4  hover:bg-gray-700 hover:text-color-primary md:p-0  md:hover:bg-transparent ${
                    pathname === item.pathname
                      ? 'text-color-primary'
                      : 'text-white'
                  }`}
                  aria-current='page'
                  onClick={() => setMenuMobileOpened((state) => !state)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
