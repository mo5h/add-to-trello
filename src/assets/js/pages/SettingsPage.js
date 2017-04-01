import React, { Component } from 'react'
import { connect } from 'react-redux'
import TrelloApi from 'libs/trello-api'
import {
  moveField,
  toggleField,
  updatePrefill
} from 'actions'

import {
  AuthLoading,
  SettingsBanner,
  LeaveAReview,
  FollowOnGithub,
  DraggableContainer
} from 'components'

class SettingsPage extends Component {
  constructor (props) {
    super(props)
    this.onReorder = this.onReorder.bind(this)
    this.onToggle = this.onToggle.bind(this)
    this.updatePrefill = this.updatePrefill.bind(this)
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

  updatePrefill (fieldId, prefill) {
    const {
      dispatch
    } = this.props

    dispatch(updatePrefill(fieldId, prefill))
  }

  render () {
    return (
      <div className='Settings'>
        <SettingsBanner />

        <div className='container'>
          <div className='row'>
            {
              TrelloApi.isAuthorized()
                ? this.renderSettingsForm()
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

  renderSettingsForm () {
    const {
      fields
    } = this.props

    const styles = {
      heading: {
        fontSize: '20px',
        padding: '10px',
        borderBottom: '1px solid #D6DADC'
      }
    }

    return (
      <div className='clearfix'>
        <div className='col-md-7 col-md-offset-3'>
          <h3 style={styles.heading}>Popup Settings</h3>
          <DraggableContainer
            fields={fields}
            onReorder={this.onReorder}
            onToggle={this.onToggle}
            updatePrefill={this.updatePrefill}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    fields,
    trello
  } = state

  return Object.assign({}, {
    fields,
    trello
  })
}

export default connect(mapStateToProps)(SettingsPage)
