import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import appReducer from '../Reducers'

const consoleMessages = store => next => action => {
	console.groupCollapsed(`dispatching action => ${action.type}`)
	console.log('users', store.getState().users)
	let result = next(action)

	let { users, albums, photos } = store.getState()

	console.log(`

        users: ${users}
		albums: ${albums}
		photos: ${photos}

	`)
	console.groupEnd()
	return result
}

export default (initialState={}) => {
	return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
}