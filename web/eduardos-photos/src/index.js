import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import { Provider } from 'react-redux'
import storeFactory from './Store'

const store = storeFactory()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))