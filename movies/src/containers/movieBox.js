import { useState } from "react"
import App from '../App.js'
import MovieList from '../containers/movieList'

function MovieBox() {
    return (
    <>
      <header>
        <h1>Upcoming Film Releases for UK</h1>
        <hr></hr>
        </header> 
        <main>
        <ul>
        <MovieList/>
        </ul>
        </main>
    </>
    )
}

export default MovieBox