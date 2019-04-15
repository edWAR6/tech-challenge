import React, { Component, Fragment } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getUsers } from '../Actions'
import Users from './Users'
import User from './Users/User'

class App extends Component {
  state = {
    users: []
  }

  async componentDidMount() {
    this.props.onLoad()
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
          <Route path={`/user/:id`}  render={
            props => <User {...props} user={users.find(user => user.id === parseInt(props.match.params.id))} />
          }/>
        </Fragment>
      </BrowserRouter>
    )
  }

  componentWillReceiveProps({ users }) {
    this.setState({ users });
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

const mapDispatchToProps = dispatch => ({
  onLoad() {
    dispatch(
      getUsers()
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

