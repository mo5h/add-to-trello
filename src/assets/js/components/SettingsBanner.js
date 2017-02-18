import React from 'react';
import {
  TrelloLogo
} from 'components';

export default () => {
  return (
    <div className='jumbotron logo-container'>
      <div className='centered'>
        <span className='pre-logo'>Add to </span>
        <TrelloLogo size='large' />
      </div>
    </div>
  );
};
