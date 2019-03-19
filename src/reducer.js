import { LOG_USER_IN, LOGOUT } from './constants'

export default function (state = {}, action) {
  switch (action.type) {
    case LOG_USER_IN: {
      const newState = { ...state }
      newState.user = action.user
      return newState
    }
    case LOGOUT: {
      const newState = { ...state }
      newState.user = null
      return newState
    }
    default:
      return state
  }
}
