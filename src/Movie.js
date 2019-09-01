import React from "react"
import propTypes from "prop-types"
import "./Movie.css"

function Movie({title, summary, poster, year, genres}){
    return (
    <div className="movie__cover">
        <img src={poster} alt={title} />
        <div className="inner__movie">
            <div className="movies__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="genres">
                    {genres.map((genre, idx) => (
                        <li key={idx}>{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    </div>
    )
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    year : propTypes.number.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie;