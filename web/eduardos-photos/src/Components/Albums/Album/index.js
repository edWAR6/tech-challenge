import React, { Component, Fragment } from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Photos from '../../../Photos'
import { getPhotos } from '../../../Actions'

class Album extends Component {

  async componentDidMount() {
    const {onLoad, match: {params: {albumid}}} = this.props
    onLoad(albumid)
  }

  render() {
    const { match: { params: { id } }, album={}, photos=[] } = this.props
    return (
      <Fragment>
        <h2>Album: {album.title}</h2>
        <Link to={`/user/${id}`}>Back to user</Link>
        <Route exact path={`/user/:id/album/:albumid`}  render={
          props => <Photos {...props} photos={photos} />
        }/>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.photos
})

const mapDispatchToProps = dispatch => ({
  onLoad(id) {
    dispatch(getPhotos(id))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album)
