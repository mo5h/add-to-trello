import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { DraggableContainer } from 'components'
import {
  moveField,
  toggleField,
  updatePrefill
} from 'actions'

const styles = {
  heading: {
    fontSize: '20px',
    padding: '10px',
    borderBottom: '1px solid #D6DADC'
  },
  saveButton: {
    float: 'right',
    marginTop: '20px'
  }
}

/**
 * Renders a reorderable list of fields to configure.
 */
class SettingsForm extends Component {

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
    const {
      fields,
      onSave
    } = this.props

    return (
      <div className='clearfix'>
        <div className='col-md-7 col-md-offset-3'>
          <button onClick={onSave} className='btn green-button' style={styles.saveButton}>Save</button>
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

SettingsForm.propTypes = {
  fields: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired
}

export default connect()(SettingsForm)
