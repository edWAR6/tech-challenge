import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default ({ match: { url }, users }) =>
  <Fragment>
    <ul>
      {users.map(({id, name}) => 
        <li key={id}>
          <Link to={`${url}user/${id}`}>{name}</Link>
        </li>
      )}
    </ul>
  </Fragment>