import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'styles/index.scss'
import PopupContainer from './containers/PopupContainer'
import { isAuthorized } from 'libs/trello-api'
import { openSettings } from 'libs/chrome'
import reducer from './reducers'

if (!isAuthorized()) {
  openSettings()
}

const store = createStore(reducer)

render(
  <Provider store={store}>
    <PopupContainer />
  </Provider>,
  document.getElementById('root')
)
