import axios from "axios";
import React, { useState } from "react";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=f99503c`
      );
      // Check if 'Search' property exists in the response
      if (response.data.Search) {
        setMovies(response.data.Search);
        console.log(response.data.Search);
      } else {
        // Handle the case where 'Search' is not present in the response
        console.log("No movies found");
        setMovies([]); // Set Movies to an empty array
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Search Movies here</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Movies"
      />
      <button onClick={handleClick}>Search</button>
      <div className="MoviesList">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <p>type: {movie.Type}</p>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
