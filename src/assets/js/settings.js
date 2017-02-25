import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'styles/index.scss';
import SettingsContainer from './containers/SettingsContainer';
import {
  isAuthorized,
  authorize
} from 'libs/trello-api';
import reducer from './reducers';

if (!isAuthorized()) {
  authorize((err) => {
    if (err) console.error(err);
  });
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <SettingsContainer />
  </Provider>,
  document.getElementById('root')
);
