import React from "react";
import SearchBar from "./SerachBar";
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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPChLezJc8e7wbfs4Ul-dQ3KVEr3tf2WtQNQ&usqp=CAU",
      },
      {
        id: 2,
        name: "Interstellar",
        rating: 6.8,
        overwiev:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, error! ",
        imageURL:
          "https://w7.pngwing.com/pngs/584/138/png-transparent-lunar-surface-interstellar-crossing-lunar-surface-astronaut.png",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar />
          </div>
        </div>
        <MovieList />
      </div>
    );
  }
}

export default App;
