import React from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {
  DraggableCard
} from 'components'

const styles = {
  borderRadius: '3px',
  padding: '10px'
}

/**
 * Renders a reorderable list of fields to configure.
 */
const DraggableContainer = ({ fields, onReorder }) => {
  return (
    <div style={styles}>
      {fields.map((field, i) => {
        return <DraggableCard
          key={field.id}
          index={i}
          id={field.id}
          field={field}
          moveCard={onReorder}
        />
      })}
    </div>
  )
}

export default DragDropContext(HTML5Backend)(DraggableContainer)
