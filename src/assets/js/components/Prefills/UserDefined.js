import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserDefined extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: props.value
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

UserDefined.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string
}

export default UserDefined
