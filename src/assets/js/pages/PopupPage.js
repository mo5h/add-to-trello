import React, { Component } from 'react'
import {openSettings} from 'libs/chrome'
import TrelloApi from 'libs/trello-api'

import {
  TrelloLogo
} from 'components'

export default class PopupPage extends Component {

  logoutHandler () {
    TrelloApi.deauthorize()
    openSettings()
  }

  render () {
    return (
      <div className='Popup container'>
        <div className='row'>
          <TrelloLogo size='small' />
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <p>placeholder</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <a className='pull-left' href='#' onClick={openSettings}>
              Settings
            </a>
            <a className='pull-right' href='#' onClick={this.logoutHandler}>
              Logout
            </a>
          </div>
        </div>
      </div>
    )
  }
}
