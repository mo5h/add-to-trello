import React, { PropTypes } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
// import FieldTypes from 'libs/field-types'
import { flow } from 'lodash'

const CARD = 'card'

const cardSource = {
  beginDrag (props) {
    return {
      id: props.id,
      index: props.index
    }
  }
}

const cardTarget = {
  hover (props, monitor) {
    const { index: dragIndex } = monitor.getItem()
    const { index: hoverIndex } = props

    if (dragIndex !== hoverIndex) {
      props.moveCard(dragIndex, hoverIndex)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().index = hoverIndex
    }
  }
}

const styles = {
  backgroundColor: '#edeff0',
  borderBottom: '1px solid #ccc',
  marginBottom: '5px',
  padding: '8px',
  borderRadius: '3px',
  cursor: 'move'
}

const DraggableCard = (props) => {
  const {
    field,
    isDragging,
    connectDragSource,
    connectDropTarget
  } = props
  const opacity = isDragging ? 0 : 1

  return connectDragSource(connectDropTarget(
    <div style={{...styles, opacity}}>
      <label>{field.label}</label>
    </div>
  ))
}

DraggableCard.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.any.isRequired,
  field: PropTypes.object.isRequired,
  moveCard: PropTypes.func.isRequired
}

export default flow(
  DropTarget(CARD, cardTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  })),
  DragSource(CARD, cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }))
)(DraggableCard)
