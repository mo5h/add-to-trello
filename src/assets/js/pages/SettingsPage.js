import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isAuthorized } from 'libs/trello-api'
import {
  moveField,
  toggleField
} from 'actions'

import {
  AuthLoading,
  SettingsBanner,
  LeaveAReview,
  FollowOnGithub,
  SettingsForm
} from 'components'

class SettingsPage extends Component {
  constructor (props) {
    super(props)
    this.onReorder = this.onReorder.bind(this)
    this.onToggle = this.onToggle.bind(this)
  }

  onReorder (dragIndex, hoverIndex) {
    const {
      dispatch
    } = this.props

    dispatch(moveField(dragIndex, hoverIndex))
  }

  onToggle (id, display) {
    const {
      dispatch
    } = this.props

    dispatch(toggleField(id, display))
  }

  render () {
    const {
      fields
    } = this.props

    return (
      <div className='Settings'>
        <SettingsBanner />

        <div className='container'>
          <div className='row'>
            {
              isAuthorized()
                ? <SettingsForm fields={fields} onReorder={this.onReorder} onToggle={this.onToggle} />
                : <AuthLoading />
            }
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

const mapStateToProps = (state) => {
  const {
    fields
  } = state

  return {
    fields
  }
}

export default connect(mapStateToProps)(SettingsPage)
