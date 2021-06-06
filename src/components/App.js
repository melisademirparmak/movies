import React from "react";
import MovieList from "./MovieList";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "The Flash",
        rating: 8.3,
        overwiev:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error! ",
        imageURL:
          "https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/8/0/3/1206803_Intersetellar.jpg",
      },
      {
        id: 2,
        name: "Interstellar",
        rating: 6.8,
        overwiev:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error! ",
        imageURL:
          "https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/8/0/3/1206803_Intersetellar.jpg",
      },
    ],
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState({
      movies: newMovieList,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
        <MovieList
          movies={this.state.movies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;
