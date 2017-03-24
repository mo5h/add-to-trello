import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openSettings } from 'libs/chrome'
import TrelloApi from 'libs/trello-api'

import {
  TrelloLogo,
  PopupForm
} from 'components'

class PopupPage extends Component {

  logoutHandler () {
    TrelloApi.deauthorize()
    openSettings()
  }

  render () {
    const { fields } = this.props

    return (
      <div className='Popup container'>
        <div className='row'>
          <TrelloLogo size='small' />
        </div>

        <div className='row'>
          <div className='col-md-12'>
            <PopupForm fields={fields} />
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

const mapStateToProps = (state) => {
  const { fields } = state

  return {
    fields
  }
}

export default connect(mapStateToProps)(PopupPage)
