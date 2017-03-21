import React, { PropTypes } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import { flow } from 'lodash'
import ToggleSwitch from '@trendmicro/react-toggle-switch'
import { PrefillSelect } from 'components'

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
  container: {
    backgroundColor: '#edeff0',
    borderBottom: '1px solid #ccc',
    marginBottom: '5px',
    padding: '8px',
    borderRadius: '3px',
    cursor: 'move'
  },
  switch: {
    float: 'right'
  },
  select: {
    margin: '10px 0'
  }
}

const DraggableCard = (props) => {
  const {
    field,
    toggleCard,
    isDragging,
    updatePrefill,
    connectDragSource,
    connectDropTarget
  } = props
  const opacity = isDragging ? 0 : 1

  return connectDragSource(connectDropTarget(
    <div style={{...styles.container, opacity}}>
      <label>{field.label}</label>

      <div style={styles.switch}>
        <ToggleSwitch
          size='sm'
          checked={field.display}
          onChange={(e) => toggleCard(field.id, !field.display)}
        />
      </div>

      <div style={styles.select}>
        <PrefillSelect
          options={field.prefill}
          onChange={(prefill) => updatePrefill(field.id, prefill)}
        />
      </div>

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
