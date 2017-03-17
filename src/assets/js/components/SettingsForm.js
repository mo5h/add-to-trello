import React, { PropTypes } from 'react'
import { DraggableContainer } from 'components'

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
    <div className='t-settings-form clearfix'>
      <div className='col-md-6'>
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
