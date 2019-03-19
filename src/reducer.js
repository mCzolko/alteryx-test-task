import { LOG_USER_IN } from './constants'

export default function (state = {}, action) {
  switch (action.type) {
    case LOG_USER_IN: {
      const newState = { ...state }
      newState.user = action.user
      return newState
    }
    default:
      return state
  }
}
