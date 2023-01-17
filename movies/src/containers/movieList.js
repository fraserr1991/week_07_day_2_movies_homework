import { useState } from "react"

function MovieList() {

    const [movieList, setMovie] = useState(
        [
            {
              id: 1,
              name: "Spider-Man: Into the Spider-Verse",
              url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
              id: 2,
              name: "Life Itself",
              url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
              id: 3,
              name: "Mary Queen of Scots",
              url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
              id: 4,
              name: "The Lego Movie 2: The Second Part", 
              url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
              id: 5,
              name: "Captain Marvel",
              url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
          ]
    )

    const movieItems = movieList.map((movie) => {
        return (
            <li key={movie.id}>
            <a href={movie.url}>
            {movie.name}
            </a>
            <br/>
            </li>
        )
    })

    const handleViewMoreClick = evt => {
        evt.preventDefault()
        window.location.href='https://www.imdb.com/calendar/?region=gb'
    }

    return (
        <>
        <li>{movieItems}</li>
        <hr/>
        <button onClick={handleViewMoreClick}>View more upcoming releases >> </button>
        </>
    )
}

export default MovieList