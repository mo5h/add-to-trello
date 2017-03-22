import React from 'react'
window.React = React

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import 'styles/index.scss'
import SettingsPage from './pages/SettingsPage'
import configureStore from './store'
import TrelloApi from 'libs/trello-api'

if (!TrelloApi.isAuthorized()) {
  TrelloApi.authorize()
    .catch((err) => console.log(err))
}

const store = configureStore()

render(
  <Provider store={store}>
    <SettingsPage />
  </Provider>,
  document.getElementById('root')
)
