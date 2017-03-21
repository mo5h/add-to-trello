import React, { PropTypes } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {
  DraggableCard
} from 'components'

const styles = {
  borderRadius: '3px',
  padding: '10px'
}

const DraggableContainer = (props) => {
  const {
    fields,
    onReorder,
    onToggle,
    updatePrefill
  } = props

  return (
    <div style={styles}>
      {fields.map((field, i) => {
        return (
          <DraggableCard
            key={field.id}
            index={i}
            id={field.id}
            field={field}
            moveCard={onReorder}
            toggleCard={onToggle}
            updatePrefill={updatePrefill}
          />
        )
      })}
    </div>
  )
}

DraggableContainer.propTypes = {
  fields: PropTypes.array.isRequired,
  onReorder: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default DragDropContext(HTML5Backend)(DraggableContainer)
