import React from 'react'
import { DraggableContainer } from 'components'

/**
 * Renders a reorderable list of fields to configure.
 */
const SettingsForm = ({ fields, onReorder }) => {
  return (
    <div className='t-settings-form clearfix'>
      <div className='col-md-6'>
        <DraggableContainer fields={fields} onReorder={onReorder} />
      </div>

    </div>
  )
}

export default SettingsForm
