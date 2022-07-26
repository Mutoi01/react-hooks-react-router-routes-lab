import React from "react";
import { movies } from "../data";

function Movies() {

  const allMovies = movies.map((item) => (
    <div key={item.title}>
      <h2>{item.title}</h2>
      <p>{item.time}</p>
      <ul>
        {item.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return <div>{/*{code here}*/}
    <h1>Movies Page</h1>
    {allMovies}
  </div>;
}

export default Movies;
