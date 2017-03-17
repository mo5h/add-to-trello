import React, { PropTypes } from 'react'
import { DraggableContainer } from 'components'

const styles = {
  heading: {
    fontSize: '20px',
    paddingBottom: '10px',
    borderBottom: '1px solid #D6DADC'
  }
}

/**
 * Renders a reorderable list of fields to configure.
 */
const SettingsForm = (props) => {
  const {
    fields,
    onReorder,
    onToggle
  } = props

  return (
    <div className='clearfix'>
      <div className='col-md-7 col-md-offset-3'>
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
  onToggle: PropTypes.func.isRequired
}

export default SettingsForm
