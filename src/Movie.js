import React, { Component } from "react"
// Tu importes les fonctions du redux
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

// Tu importes les actions nescessaires au déroulement de ton application
import * as Actions from "./actions/film"

class Movie extends Component {

    constructor(props) {
        super(props)
        this.state = {
            addMovieValue: "",
            deleteMovieValue: "",
        }
    }

    onClick = (actionName, titleMovie) => {
        // Je recupere les actions qui sont dans les props
        const { actions } = this.props
        if (actionName === "addMovieValue") {
            // J'utilise l'action commme une fonction
            actions.addMovie(titleMovie)
        } else if (actionName === "deleteMovie") {
            // J'utilise l'action commme une fonction
            actions.deleteMovie(titleMovie)
        }
    }

    render() {
        // Je recupere les films du state global dans les props
        const { movie } = this.props
        const { addMovieValue, deleteMovieValue } = this.state
        return (
            <div>
                <div>
                    <ul>
                        {
                            // Affichage des films dans le state global
                            movie.map((titleMovie) => (
                                <li key={ `film-${titleMovie}` }>{ titleMovie }</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <p>Film a ajouter</p>
                    <input type="text" value={ addMovieValue } onChange={ (e) => this.setState({ addMovieValue: e.target.value }) } />
                    <button onClick={ () => this.onClick("addMovieValue", addMovieValue) }>Envoyer</button>
                </div>
                <div>
                    <p>Film a supprimer</p>
                    <input type="text" value={ deleteMovieValue } onChange={ (e) => this.setState({ deleteMovieValue: e.target.value }) } />
                    <button onClick={ () => this.onClick("deleteMovie", deleteMovieValue) }>Envoyer</button>
                </div>
            </div>
        )
    }

}

// Tu peux definir mapStateToProps et mapDispatchToProps dans n'importe quel composant

// Ca te permet de te connecter a ton state global
const mapStateToProps = (state) => {
	const { movie } = state.film
	return { movie }
}

// Ca te permet d'utiliser les fonctions qui sont dans le fichier actions, une fois fais,
// tu les retrouves dons ton this.props
const mapDispatchToProps = (dispatch) => (
	{ actions: bindActionCreators(Actions, dispatch) }
)

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
