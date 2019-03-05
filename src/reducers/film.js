import * as types from "../constants/actionTypes"

// state global
const initialState = {
    movie: ["Batman", "Superman", "SpiderMan", "DragonBallZ"],
}

const film = (state = initialState, action) => {
    // tu cree une variable, tu n'es pas obligé mais ca te permet de mieux regarder le résultat avec
    // un console.log() avant le return
    let newState = {}

    switch (action.type) {
        case types.ADD_MOVIE:
            newState = {
                ...state,
                movie: [
                    ...state.movie,
                    action.name, // Rajoute le film au state
                ],
            }
            return newState

        case types.DELETE_MOVIE:
            newState = {
                ...state,
                movie: state.movie.filter((movie) => movie !== action.name) // Supprime le film du state
            }
            return newState
        default:
            return state

    }
}

export default film
