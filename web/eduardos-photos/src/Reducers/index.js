import { GET_USERS, GET_ALBUMS, GET_PHOTOS } from '../constants'
import { combineReducers } from 'redux'

export const initialState = {
  users: [],
  albums: [],
  photos: [],
}

export const getUsers = (state=initialState, action) => {
  if (action.type === GET_USERS) {
    return action.payload
  }
  return state;
}

export const getAlbums = (state=initialState, action) => {
  if (action.type === GET_ALBUMS) {
    return action.payload
  }
  return state;
}

export const getPhotos = (state=initialState, action) => {
  if (action.type === GET_PHOTOS) {
    return action.payload
  }
  return state;
}

export default combineReducers({
  getUsers,
  getAlbums,
  getPhotos,
})
