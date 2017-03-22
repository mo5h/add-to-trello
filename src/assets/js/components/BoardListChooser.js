import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchAllOrgs
} from 'actions'

class BoardListChooser extends Component {
  componentDidMount () {
    this.props.dispatch(fetchAllOrgs())
  }

  render () {
    let {
      boards
      // prefillValue
    } = this.props

    // TOOD: remove once API call is in place
    if (!boards) {
      boards = []
    }

    return (
      <div>
        <label>Board:</label>
        <select className='form-control'>
          <option>Select One:</option>
          {
            boards.map((board, i) => {
              return (
                <option key={i} id={board.id}>
                  {board.label}
                </option>
              )
            })
          }
        </select>
      </div>
    )
  }
}

export default connect()(BoardListChooser)
