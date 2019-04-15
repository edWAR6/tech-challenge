import { GET_USERS, GET_ALBUMS, GET_PHOTOS } from '../constants'

export const getUsers = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            dispatch({
                type: GET_USERS,
                payload: users
            })
        })
}

export const getAlbums = userId => async dispatch => {
    const albums = await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)).json()
    dispatch({
        type: GET_ALBUMS,
        payload: albums
    })
}

export const getPhotos = albumId => async dispatch => {
    const photos = await (await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)).json()
    dispatch({
        type: GET_PHOTOS,
        payload: photos
    })
}
