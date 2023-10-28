import Link from 'next/link';

const Error = ({ message }: { message: string }) => {
  return (
    <div className='flex h-screen flex-col items-center items-center justify-center'>
      <h1 className='text-[120px] font-extrabold text-white'>404</h1>
      <p className='mb-6 text-2xl font-medium text-white'>{message}</p>
      <a href='/' className='button-primary'>
        Go Home
      </a>
    </div>
  );
};

export default Error;
