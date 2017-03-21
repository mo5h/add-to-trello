import React, { Component } from 'react'
import PrefillTypes from 'libs/prefill-types'
import {
  BoardListChooser
} from 'components'

export default class PrefillSelect extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    const {
      options,
      onChange
    } = this.props

    const selected = options.available.find((o) => o.id === this.refs.select.value)
    const value = this.refs.value ? this.refs.value.value : null
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

    let subOption
    switch (options.selected.id) {
      case PrefillTypes.USER_DEFINED.id:
        subOption = this.renderInput(options.value)
        break
      case PrefillTypes.BOARD_LIST_CHOOSE.id:
        subOption = <BoardListChooser prefillValue={options.value} />
    }

    return (
      <div>
        <label>Default Value:</label>

        <div className='form-group'>
          <select
            ref='select'
            className='form-control'
            value={options.selected.id}
            onChange={this.onChange}>
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

        <div className='form-group'>
          {subOption}
        </div>

      </div>
    )
  }

  renderInput (value) {
    return (
      <input
        ref='value'
        className='form-control'
        defaultValue={value}
        placeholder='Type something...'
        onChange={this.onChange}
      />
    )
  }
}
