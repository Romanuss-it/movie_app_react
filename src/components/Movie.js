import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import "../routes/Home.css";
import "./movie.css";

function Movie({ id, title, summary, poster, year, genres }) {
  return (
    <div className="movie">
    <Link to={{
      pathname: `/movie/:${id}`, //назва посилання
      state: {
        year,
        title, // = title: title
        summary: summary,
        poster: poster,
        genres: genres
      }
    }}>
     
        <img src={poster} alt={title} title={title} />
        <div className="movie__column">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => { // функція виведення даних із масиву із жанрами
              return <li key={index} className="genres_genre"> {genre}</li>;
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      
    </Link>
    </div>
  );
}

Movie.propTypes = { //перевірка типу отриманих даних
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
