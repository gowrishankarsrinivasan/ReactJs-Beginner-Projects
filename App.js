// src/App.js

import React, { useState } from 'react';
import SearchBar from './Projects/MovieApp/SearchBar';
import MovieList from './Projects/MovieApp/MovieList';
import { searchMovies } from './Projects/MovieApp/movieService';

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
