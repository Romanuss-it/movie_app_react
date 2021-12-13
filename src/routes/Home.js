import React from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import "./Home.css";
import "../components/movie.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };


  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=like_count" // отримання інформації від звертання по api
    );
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() { // виклик функції відразу після формування dom 
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // створення скороченого запису
    return (
      <section className="container">
        {isLoading ? ( // перевірка на загрузку сторінки 
          <div className="loader">
            <span className="loader__text">loading...</span>
          </div>
        ) : ( 
          <div className="movies">
          {movies.map((movie) => ( //функція присвоєння даних отриманих по запиту на сервер yts
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
        )}
      </section>
    );
  }
}

export default Home;
