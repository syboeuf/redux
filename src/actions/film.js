import * as constants from "../constants/actionTypes"

// Action qui permet de rajouter un film
export const addMovie = (name) => ({
    type: constants.ADD_MOVIE, name,
})

// Action qui permet de supprimer un film
export const deleteMovie = (name) => ({
    type: constants.DELETE_MOVIE, name,
})
