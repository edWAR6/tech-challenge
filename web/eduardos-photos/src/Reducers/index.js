import { GET_USERS, GET_ALBUMS, GET_PHOTOS } from '../constants'
import { combineReducers } from 'redux'

export const users = (state=[], action) => {
  // console.log(action)
  // console.log(state)
  if (action.type === GET_USERS) {
    return action.payload
  }
  return state;
}

export const albums = (state=[], action) => {
  if (action.type === GET_ALBUMS) {
    return action.payload
  }
  return state;
}

export const photos = (state=[], action) => {
  if (action.type === GET_PHOTOS) {
    return action.payload
  }
  return state;
}

export default combineReducers({
  users,
  albums,
  photos,
})
