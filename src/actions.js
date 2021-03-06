import { apiUrl, groupId, inviteToken, LOG_USER_IN, LOGOUT } from './constants';

const logUserIn = user => ({
  type: LOG_USER_IN,
  user
})

export function register(user) {
  return dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...user,
        invite: inviteToken
      })
    }

    fetch(`${apiUrl}/user/${groupId}`, requestOptions)
      .then(res => res.json())
      .then(res => res.data)
      .then(user => dispatch(logUserIn(user)))
  }
}

export function login(user) {
  return dispatch => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }

    fetch(`${apiUrl}/user/login`, requestOptions)
      .then(res => res.json())
      .then(res => res.data)
      .then(user => dispatch(logUserIn(user)))
  }
}

export const logout = () => ({
  type: LOGOUT
})
