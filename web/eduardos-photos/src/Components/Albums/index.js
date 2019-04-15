import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default ({ match: { url }, albums }) =>
  <Fragment>
    <h2>Albums</h2>
    <ul>
      {albums.map(({ id, title }) => 
        <li key={id}>
          <Link to={`${url}/album/${id}`}>
            {title}
          </Link>
        </li>
      )}
      
    </ul>
  </Fragment>
