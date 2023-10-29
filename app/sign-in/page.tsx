'use client';

import { getData } from '@/utils/api';
import Link from 'next/link';
import { useState, useEffect, useRef, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { deleteCookie, hasCookie, setCookie } from 'cookies-next';

const SignIn = () => {
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<string>('');
  const router = useRouter();

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setDisabledInput(true);
      const dataCreateRequestToken = await getData('/authentication/token/new');
      const requestToken = dataCreateRequestToken.request_token;

      await getData('/authentication/token/validate_with_login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameInput.current?.value,
          password: passwordInput.current?.value,
          request_token: requestToken,
        }),
      });
      const dataCreateSession = await getData(
        `/authentication/session/new?request_token=${requestToken}`
      );
      setCookie('sessionId', dataCreateSession.session_id);
      setDisabledInput(false);
      router.push('/');
    } catch (error: any) {
      setErrorLogin(error.message);
      setDisabledInput(false);
    }
  };

  const clearErrorMessage = () => {
    if (errorLogin.trim() !== '') setErrorLogin('');
  };

  if (hasCookie('sessionId')) {
    return (
      <div className='flex h-screen flex-col items-center justify-center'>
        <h1 className='mb-4 text-2xl text-white'>You are signed in</h1>
        <button
          className='button-primary'
          onClick={() => {
            deleteCookie('sessionId');
            router.push('/sign-in');
          }}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className='flex items-center justify-center px-5 pb-60 pt-24'>
      <div className='w-full space-y-8 rounded-lg bg-white p-6 shadow-xl sm:p-8 lg:max-w-xl'>
        <h2 className='text-2xl font-bold text-gray-900 '>
          Sign in to MoviesRec
        </h2>
        <form className='mt-8 space-y-6' onSubmit={onFormSubmit}>
          <div>
            <label
              htmlFor='username'
              className='mb-2 block text-sm font-medium text-gray-900 '
            >
              Username
            </label>
            <input
              type='input'
              name='input'
              id='username'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
              placeholder='Your username'
              required
              ref={usernameInput}
              onChange={clearErrorMessage}
              disabled={disabledInput}
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='mb-2 block text-sm font-medium text-gray-900 '
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='••••••••'
              className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 '
              required
              ref={passwordInput}
              onChange={clearErrorMessage}
              disabled={disabledInput}
            />
          </div>
          <span className='text-xs text-red-500'>{errorLogin}</span>
          <div className='flex items-start'>
            <button type='submit' className='button-primary'>
              Login to your account
            </button>
            <Link
              href='https://www.themoviedb.org/reset-password'
              target='blank'
              className='ml-auto text-sm font-medium text-blue-600'
            >
              Lost Password?
            </Link>
          </div>

          <div className='text-sm font-medium text-gray-900 '>
            Not registered yet?
            <Link
              href='https://www.themoviedb.org/signup'
              target='blank'
              className='text-blue-600'
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
