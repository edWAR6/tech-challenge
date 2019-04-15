import React, { Fragment } from 'react'

export default ({ match: { url }, photos }) =>
  <Fragment>
    <h2>Photos</h2>
    <ul>
      {photos.map(({ id, title, thumbnailUrl }) => 
        <li key={id}>
          <img src={thumbnailUrl} alt={title}/>
          <p>{title}</p>
        </li>
      )}
      
    </ul>
  </Fragment>
