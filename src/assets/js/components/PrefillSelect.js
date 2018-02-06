import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PrefillTypes from 'libs/prefill-types'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.css'

import {
  BoardListChooser
} from 'components'

class PrefillSelect extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange (value = null) {
    const {
      options,
      onChange
    } = this.props

    const selected = options.available.find((o) => o.id === this.refs.select.value)
    const prefill = {
      ...options,
      selected,
      value
    }

    onChange(prefill)
  }

  render () {
    const {
      options
    } = this.props

    return (
      <div>
        <label>Default Value:</label>

        <div className='form-group'>
          <select
            ref='select'
            className='form-control'
            value={options.selected.id}
            onChange={() => this.onChange()}>
            {
              options.available.map((type, i) => {
                return (
                  <option key={i} value={type.id}>
                    {type.label}
                  </option>
                )
              })
            }
          </select>
        </div>

        {this.getSubOption()}

      </div>
    )
  }

  getSubOption () {
    const {
      options
    } = this.props

    switch (options.selected.id) {
      case PrefillTypes.USER_DEFINED.id:
        return (
          <input
            className='form-control'
            defaultValue={options.value}
            placeholder='Type something...'
            onChange={(e) => this.onChange(e.target.value)}
          />
        )
      case PrefillTypes.BOARD_LIST_CHOOSE.id:
        return (
          <BoardListChooser prefillValue={options.value} onChange={this.onChange} />
        )
      case PrefillTypes.CHOOSE_DATE.id:
        return (
          <Flatpickr
            className='form-control'
            onChange={this.onChange}
            options={{
              enableTime: true,
              altInput: true,
              defaultDate: 'today'
            }}
          />
        )
      default:
        return null
    }
  }
}

PrefillSelect.propTypes = {
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default PrefillSelect
