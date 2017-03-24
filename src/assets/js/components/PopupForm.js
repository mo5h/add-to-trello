import React, { Component, PropTypes } from 'react'

class PopupForm extends Component {
  render () {
    const { fields } = this.props

    return (
      <div>
        {fields.map((f) => {
          return <p>{f.label}</p>
        })}
      </div>
    )
  }
}

PopupForm.propTypes = {
  fields: PropTypes.array.isRequired
}

export default PopupForm
