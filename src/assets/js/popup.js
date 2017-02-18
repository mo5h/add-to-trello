import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/index.scss';
import PopupContainer from './components/PopupContainer';
import {isAuthorized} from 'libs/trello-api';
import {openSettings} from 'libs/chrome';

if (!isAuthorized()) {
  openSettings();
}

ReactDOM.render(
  <PopupContainer />,
  document.getElementById('root')
);
