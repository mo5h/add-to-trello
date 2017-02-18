import React from 'react';

export default () => {
  return (
    <div className='auth-loading'>
      <div className='text-center'>
        <img src='assets/images/ajax-loader.gif' alt='Loading' />
      </div>
      <div className='text-center lead'>
        Checking Authorization
      </div>
    </div>
  );
};
