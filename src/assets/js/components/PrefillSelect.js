import React, { Component } from 'react'

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
    // const value = this.refs.value || null
    const prefill = {
      ...options,
      selected
      // value
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
    )
  }

  renderInput (value) {
    return (
      <input ref='value' value={value} onChange={this.onChange} />
    )
  }
}
