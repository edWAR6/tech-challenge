import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import appReducer from '../Reducers'

const consoleMessages = store => next => action => {
	console.groupCollapsed(`dispatching action => ${action.type}`)
	let { users, albums, photos } = store.getState()
	console.log(`

        users: ${users}
		albums: ${albums}
		photos: ${photos}

	`)
	// console.log('action', action)
	let result = next(action)

	let { users: newUsers, albums: newAlbums, photos: newPhotos } = store.getState()
	console.log(`

        users: ${newUsers}
		albums: ${newAlbums}
		photos: ${newPhotos}

	`)
	console.groupEnd()
	return result
}

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}