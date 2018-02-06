import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Flatpickr from 'react-flatpickr'

import 'flatpickr/dist/flatpickr.css'

class DueDate extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.state = {
      value: props.value
    }
  }

  onChange (value) {
    this.setState({ value })
  }

  render () {
    const { label } = this.props
    const { value } = this.state

    const options = {
      enableTime: true,
      altInput: true,
      defaultDate: 'today'
    }

    return (
      <div>
        <label>{label}</label>
        <Flatpickr
          className='form-control'
          onChange={this.onChange}
          options={options}
          {... value ? { value } : null} // dynamically pass along the value prop if it's not null
        />
      </div>
    )
  }
}

DueDate.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string
}

export default DueDate
