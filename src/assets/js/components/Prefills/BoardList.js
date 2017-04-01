import React, { Component, PropTypes } from 'react'
import { BoardListChooser } from 'components'

class BoardList extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.state = {
      value: props.value
    }
  }

  onChange (value) {
    this.setState({
      value
    })
  }

  render () {
    const {
      value
    } = this.state

    return (
      <BoardListChooser prefillValue={value} onChange={this.onChange} />
    )
  }
}

BoardList.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string
}

export default BoardList
