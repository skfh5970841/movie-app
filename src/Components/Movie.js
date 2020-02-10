import React from "react";
import PropTypes from "prop-types";
import "../Style/Movie.css";
import { Link } from 'react-router-dom'


Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

function Movie({id, year, title, summary, poster, genres}) {
    return (
    <Link to={{
        pathname : `/movie-detail/${id}`,
        states : {
            id,
            year,   
            title,
            summary,
            poster,
            genres
        }
    }}>
        <div className="movie"> 
    <img src={poster} alt={title} title={title}></img>
    <div className="movie__data">
        <h3 className="movie__title"> {title} </h3>
        <h5 className="movie__year"> {year} </h5>
        <ul className="genres">{genres.map((genres, index)=><li key={index} className="genres__genre">{genres}</li>)}</ul>
        <p className="movie__summary">{summary}</p>
    </div>
    </div>
    </Link>
    );
}


export default Movie;