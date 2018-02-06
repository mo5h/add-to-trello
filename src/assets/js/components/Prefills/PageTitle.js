import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getCurrentTab } from 'libs/chrome'

class PageTitle extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.state = {
      value: null
    }
  }

  componentDidMount () {
    getCurrentTab((tab) => {
      this.setState({
        value: tab.title
      })
    })
  }

  onChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    const { value } = this.state
    const { label } = this.props

    if (!value) {
      return null
    }

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

PageTitle.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string
}

export default PageTitle
