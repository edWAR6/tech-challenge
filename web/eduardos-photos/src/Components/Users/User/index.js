import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAlbums } from '../../../Actions'
import Albums from '../../Albums'
import Album from '../../Albums/Album'

class User extends Component {

  async componentDidMount() {
    const onLoad = this.props.onLoad
    const uderId = this.props.match.params.id
    onLoad(uderId)
  }

  render() {
    const { user={}, albums=[] } = this.props
    const { name, email } = user
    return (
      <Fragment>
        <div>
          <Link to='/'>Back home</Link>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
        <Route exact path={`/user/:id`}  render={
          props => <Albums {...props} albums={albums} />
        }/>
        <Route exact path={`/user/:id/album/:albumid`}  render={
          props => <Album {...props} album={albums.find(album => album.id === parseInt(props.match.params.albumid))} />
        }/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  albums: state.albums
})

const mapDispatchToProps = dispatch => ({
  onLoad(userId) {
    dispatch(getAlbums(userId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
