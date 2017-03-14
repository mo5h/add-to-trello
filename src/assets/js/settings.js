import React from 'react'
window.React = React

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'styles/index.scss'
import SettingsPage from './pages/SettingsPage'
import configureStore from './store'
import {
  isAuthorized,
  authorize
} from 'libs/trello-api'

if (!isAuthorized()) {
  authorize((err) => {
    if (err) console.error(err)
  })
}

const store = configureStore()

render(
  <Provider store={store}>
    <SettingsPage />
  </Provider>,
  document.getElementById('root')
)
