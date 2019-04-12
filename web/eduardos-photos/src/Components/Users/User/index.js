import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAlbums } from '../../../Actions'

class User extends Component {

  async componentDidMount() {
    const onLoad = this.props.onLoad;
    const uderId = this.props.match.params.id;
    onLoad(uderId)
  }

  render() {
    const { match: { url }, user={}, albums=[] } = this.props
    const { name, email } = user
    console.log(this.props)
    return (
      <Fragment>
        <div>
          <Link to='/'>Back</Link>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
        <div>
          <ul>
            {albums.map(({id, title}) => 
              <li key={id}>
                <Link to={`${url}album/${id}`}>{title}</Link>
              </li>
            )}
          </ul>
        </div>
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
