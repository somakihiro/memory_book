import {ActionTypes} from '../constants/app'

const books = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.BOOK__FETCH_REQUEST:
      return {
        ...state,
      }
    default:
      return state

  }
}

export default books
