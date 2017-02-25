const initialState = [
  {
    id: 'TITLE'
  },
  {
    id: 'DESCRIPTION'
  },
  {
    id: 'DUE_DATE'
  },
  {
    id: 'BOARD'
  },
  {
    id: 'LIST'
  },
  {
    id: 'POSITION'
  }
]

export default function fields (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
