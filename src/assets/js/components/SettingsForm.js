import React, { PropTypes } from 'react'
import { DraggableContainer } from 'components'

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
const SettingsForm = (props) => {
  const {
    fields,
    onReorder,
    onToggle,
    onSave
  } = props

  return (
    <div className='clearfix'>
      <div className='col-md-7 col-md-offset-3'>
        <button onClick={onSave} className='btn green-button' style={styles.saveButton}>Save</button>
        <h3 style={styles.heading}>Popup Settings</h3>
        <DraggableContainer
          fields={fields}
          onReorder={onReorder}
          onToggle={onToggle}
        />
      </div>
    </div>
  )
}

SettingsForm.propTypes = {
  fields: PropTypes.array.isRequired,
  onReorder: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default SettingsForm
