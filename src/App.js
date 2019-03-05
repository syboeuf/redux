import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import Movie from "./Movie"


// Tu connectes ton redux a ton application
const App = () => (
	<Provider store={ store }>
		<Movie />
	</Provider>
)

export default App
