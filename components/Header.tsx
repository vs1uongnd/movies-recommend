import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a href='https://flowbite.com/' className='flex items-center'>
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='mr-3 h-8'
            alt='Flowbite Logo'
          />
          <span className='self-center whitespace-nowrap text-2xl font-semibold'>
            Flowbite
          </span>
        </a>
        <div className='flex md:order-2'>
          <button
            type='button'
            className='mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  md:mr-0'
          >
            Get started
          </button>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden'
            aria-controls='navbar-sticky'
            aria-expanded='false'
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
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='navbar-sticky'
        >
          <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 '>
            <li>
              <Link
                href='/'
                className='block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='popular-trending'
                className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100    md:p-0 md:hover:bg-transparent md:hover:text-blue-700 '
              >
                Popular & Trending
              </Link>
            </li>
            <li>
              <Link
                href='upcoming'
                className='block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100    md:p-0 md:hover:bg-transparent md:hover:text-blue-700 '
              >
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
