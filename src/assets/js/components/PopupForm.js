import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PrefillTypes from 'libs/prefill-types'
import { getPrefillById } from 'components/Prefills'
import { updatePrefill } from 'actions'

class PopupForm extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (e) {
    e.preventDefault()
    const {
      fields,
      onSubmit,
      dispatch
    } = this.props
    const data = {}

    // TODO: refactor using callbacks
    // instead of reading child's state via refs
    fields.map((f) => {
      const prefill = this.refs[f.id]
      if (!prefill) return null
      const value = prefill.state.value

      // if we have `last_used` selected, update state to include the
      // newly selected board/list and make sure we persist state before submitting
      if (f.prefill.selected.id === PrefillTypes.BOARD_LIST_LAST_USED.id) {
        dispatch(updatePrefill(f.id, {
          ...f.prefill,
          value
        }))
      }

      data[f.id] = value
    })

    onSubmit(data)
  }

  render () {
    const { fields } = this.props

    return (
      <form onSubmit={this.onSubmit}>
        {
          fields.map((f) => {
            const Prefill = getPrefillById(f.prefill.selected.id)
            if (!Prefill || !f.display) return null
            return (
              <div key={f.id} className='form-group'>
                <Prefill
                  ref={f.id}
                  label={f.label}
                  id={f.prefill.selected.id}
                  value={f.prefill.value}
                />
              </div>
            )
          })
        }
        <div className='form-group'>
          <button className='btn green-button'>Add</button>
        </div>
      </form>
    )
  }
}

PopupForm.propTypes = {
  fields: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default connect()(PopupForm)
