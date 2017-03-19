import React, { Component } from 'react'
import { connect } from 'react-redux'
import noty from 'noty'
import { isAuthorized } from 'libs/trello-api'
import {
  moveField,
  toggleField,
  saveFields
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
    this.onSave = this.onSave.bind(this)
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

  onSave () {
    const {
      dispatch,
      fields
    } = this.props

    dispatch(saveFields(fields))

    // TODO: might be a better way to handle this
    noty({
      theme: 'bootstrapTheme',
      text: 'Saved!',
      type: 'success',
      timeout: 3000
    })
  }

  renderSettingsForm () {
    const {
      fields
    } = this.props

    if (!isAuthorized()) {
      return <AuthLoading />
    }

    return <SettingsForm
      fields={fields}
      onReorder={this.onReorder}
      onToggle={this.onToggle}
      onSave={this.onSave}
    />
  }

  render () {
    return (
      <div className='Settings'>
        <SettingsBanner />

        <div className='container'>
          <div className='row'>
            {this.renderSettingsForm()}
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
