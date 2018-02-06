import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PrefillTypes from 'libs/prefill-types'

class Position extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)

    let displayValue
    switch (props.id) {
      case PrefillTypes.POSITION_TOP.id:
        displayValue = 'top'
        break
      case PrefillTypes.POSITION_BOTTOM.id:
        displayValue = 'bottom'
        break
      default:
        displayValue = props.value
        break
    }

    this.state = {
      value: displayValue
    }
  }

  onChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    const { label } = this.props
    const { value } = this.state

    return (
      <div>
        <label>{label}</label>
        <input
          className='form-control'
          defaultValue={value}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

Position.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string
}

export default Position
