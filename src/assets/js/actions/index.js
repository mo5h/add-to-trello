import TrelloApi from 'libs/trello-api'

export const MOVE_FIELD = 'MOVE_FIELD'
export const moveField = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_FIELD,
    dragIndex,
    hoverIndex
  }
}

export const TOGGLE_FIELD = 'TOGGLE_FIELD'
export const toggleField = (id, display) => {
  return {
    type: TOGGLE_FIELD,
    id,
    display
  }
}

export const UPDATE_PREFILL = 'UPDATE_PREFILL'
export const updatePrefill = (fieldId, updatedPrefill) => {
  return {
    type: UPDATE_PREFILL,
    id: fieldId,
    prefill: updatedPrefill
  }
}

export const REQUEST_ORGS = 'REQUEST_ORGS'
export const requestOrgs = () => {
  return {
    type: REQUEST_ORGS
  }
}

export const RECEIVE_ORGS = 'RECEIVE_ORGS'
export const receiveOrgs = (organizations) => {
  return {
    type: RECEIVE_ORGS,
    organizations,
    receivedAt: Date.now()
  }
}

export const fetchAllOrgs = () => {
  return function (dispatch) {
    dispatch(requestOrgs())

    TrelloApi.fetchAll()
      /**
       * Transform the data
       */
      .then((member) => {
        const {
          boards,
          organizations
        } = member

        return boards.reduce((state, board) => {
          const orgId = board.idOrganization

          // first check if the org has already been added and push into that
          if (state[orgId]) {
            state[orgId].boards.push(board)
            return state
          }

          // if not, check if it's in our orgs list and add the new org to the accumulator
          const selectedOrg = organizations.find((org) => org.id === orgId)
          if (selectedOrg) {
            state[selectedOrg.id] = {
              displayName: selectedOrg.displayName,
              boards: [board]
            }
            return state
          }

          // as a catch-all put anything else in the 'me' org
          if (state.me) {
            state.me.boards.push(board)
            return state
          }

          state.me = {
            displayName: 'Boards',
            boards: [board]
          }

          return state
        }, {})
      })
      /**
       * Dispatch the receiving action
       */
      .then((state) => {
        dispatch(receiveOrgs(state))
      })
  }
}

export const REQUEST_SUBMIT = 'REQUEST_SUBMIT'
export const requestSubmit = (card) => {
  return {
    type: REQUEST_SUBMIT,
    card
  }
}

export const RECEIVE_SUBMIT = 'RECEIVE_SUBMIT'
export const receiveSubmit = (response) => {
  return {
    type: RECEIVE_SUBMIT,
    response
  }
}

export const CLOSE_WINDOW = 'CLOSE_WINDOW'
export const closeWindow = () => {
  window.close()
}

export const submitCard = (card) => {
  return function (dispatch) {
    dispatch(requestSubmit(card))

    TrelloApi.submitCard(card)
      .then((res) => {
        dispatch(receiveSubmit(res))
        dispatch(closeWindow())
      })
  }
}
