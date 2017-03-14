import React from 'react'
import {isAuthorized} from 'libs/trello-api'

import {
  AuthLoading,
  SettingsBanner,
  LeaveAReview,
  FollowOnGithub
} from 'components'

export default class SettingsPage extends React.Component {
  render () {
    let content
    if (!isAuthorized()) {
      content = <AuthLoading />
    } else {
      content = <p>placeholder</p>
    }

    return (
      <div className='Settings'>

        <SettingsBanner />

        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {content}
            </div>
          </div>

          <div className='row footer'>
            <div className='col-md-6'>
              <LeaveAReview />
            </div>
            <div className='col-md-6'>
              <FollowOnGithub />
            </div>
          </div>

        </div>
      </div>
    )
  }
}
