import React from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import "./Home.css";
import "../components/movie.css";
import "./loader.css";

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
      // асинхронна функція чекає отримавання відповіді від серверу, лише тоді функція продовжує своє виконання
      "https://yts.mx/api/v2/list_movies.json?sort_by=like_count" // отримання інформації від звертання по api
    );
    this.setState({ movies: movies, isLoading: false });
  };

  componentDidMount() {
    // виклик функції відразу після формування dom-дерева
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // створення скороченого запису
    return (
      <section className="container">
        {isLoading ? ( // перевірка на загрузку сторінки
          <div className="loader">
            <div class="loader__filmstrip"></div>
            
          </div>
        ) : (
          <div className="movies">
            {movies.map(
              (
                movie //функція присвоєння даних отриманих по запиту на сервер yts
              ) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )
            )}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
