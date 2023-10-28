import React from 'react';

const LoadMore = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      type='button'
      className='button-primary relative left-1/2 mt-5 -translate-x-1/2'
      onClick={onClick}
    >
      Load More
    </button>
  );
};

export default LoadMore;
