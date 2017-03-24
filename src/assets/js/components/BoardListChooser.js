import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
  fetchAllOrgs
} from 'actions'

class BoardListChooser extends Component {
  constructor (props) {
    super(props)

    this.boardChanged = this.boardChanged.bind(this)
    this.listChanged = this.listChanged.bind(this)

    const { prefillValue } = props

    let boardId, listId
    if (prefillValue) {
      [ boardId, listId ] = prefillValue.split('|')
    }

    this.state = {
      boardId,
      listId
    }
  }

  componentDidMount () {
    this.props.dispatch(fetchAllOrgs())
  }

  boardChanged () {
    const boardId = this.refs.board.value

    this.refs.list.value = null

    this.setState({ boardId })
  }

  listChanged () {
    const {
      board,
      list
    } = this.refs

    const value = board.value + '|' + list.value
    this.props.onChange(value)
  }

  getLists (boardId) {
    const { organizations } = this.props

    const selectedBoard = _.reduce(organizations, (sum, org) => {
      const board = org.boards.find((b) => b.id === boardId)
      if (!board) {
        return sum
      }

      return board
    }, null)

    if (!selectedBoard) {
      return []
    }

    return selectedBoard.lists
  }

  render () {
    const {
      organizations
    } = this.props

    const {
      boardId,
      listId
    } = this.state

    return (
      <div>
        <div className='form-group'>
          <label>Board:</label>
          <select className='form-control' ref='board' defaultValue={boardId} onChange={this.boardChanged}>
            <option>Select One:</option>
            {
              _.map(organizations, (org, i) => {
                return (
                  <optgroup key={i} label={org.displayName}>
                    {
                      org.boards.map((board, index) => {
                        return (
                          <option key={index} value={board.id}>
                            {board.name}
                          </option>
                        )
                      })
                    }
                  </optgroup>
                )
              })
            }
          </select>
        </div>

        <div className='form-group'>
          <label>List:</label>
          <select className='form-control' ref='list' defaultValue={listId} onChange={this.listChanged}>
            <option>Select One:</option>
            {
              this.getLists(boardId).map((list, i) => {
                return (
                  <option key={i} value={list.id}>
                    {list.name}
                  </option>
                )
              })
            }
          </select>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    trello
  } = state

  return Object.assign({}, {
    organizations: trello.organizations,
    lastReceived: trello.receivedAt
  })
}

export default connect(mapStateToProps)(BoardListChooser)
