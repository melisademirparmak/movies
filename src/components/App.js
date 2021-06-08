import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SerachBar";
import axios from "axios";
require("dotenv").config();

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  /* Fetch*/
  // async componentDidMount() {
  //   const baseURL = " http://localhost:3001/movies";
  //   const response = await fetch(baseURL);
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  //   this.setState({movies:data})
  // }

  /*Axios*/

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );

    this.setState({ movies: response.data.results });
  }

  /* Delete */
  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };

  /* Fetch Delete*/
  // deleteMovie = async (movie) => {
  //   const baseURL = ` http://localhost:3001/movies/${movie.id}`;
  //   await fetch(baseURL, {
  //     method: "DELETE",
  //   });

  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };

  /* Axios Delete*/

  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3001/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovies} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}

export default App;
