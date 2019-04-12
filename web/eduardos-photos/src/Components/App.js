import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Users from './Users'
import User from './Users/User'

class App extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
    this.setState({ users })
  }

  render() {
    const { users } = this.state
    return (
      <BrowserRouter>
        <Fragment>
          <Link to="/">
            Eduardo's Photo Site
          </Link>

          <hr/>

          <Route exact path="/" render={
            props => <Users {...props} users={users}></Users>
          }/>
          <Route exact path={`/user/:id`}  render={
            props => <User {...props} user={users.find(user => user.id === parseInt(props.match.params.id))} />
          }/>
        </Fragment>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state, props) => ({
  users: state.users
})

export default connect(
  mapStateToProps
)(App)

