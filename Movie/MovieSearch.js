// import axios from "axios";
// import React, { useState } from "react";
// import "../NavBar/MovieSearch.css";

// const MovieSearch = () => {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);

//   const handleClick = async () => {
//     try {
//       const response = await axios.get(
//         `http://www.omdbapi.com/?s=${query}&apikey=f99503c`
//       );
//       // Check if 'Search' property exists in the response
//       if (response.data.Search) {
//         setMovies(response.data.Search);
//         console.log(response.data.Search);
//       } else {
//         // Handle the case where 'Search' is not present in the response
//         console.log("No movies found");
//         setMovies([]); // Set Movies to an empty array
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="movie-container">
//       <div className="movie-container-inner">
//         <h1>Search Movies here</h1>
//         <input
//         className="movie-container-inner-input"
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search Movies"
//         />
//         <button onClick={handleClick}>Search</button>
//       </div>
//       <div className="movie-container-bottom">
//         <div className="MoviesList">
//           {movies && movies.length > 0 ? (
//             movies.map((movie) => (
//               <div key={movie.imdbID}>
//                 <h2>{movie.Title}</h2>
//                 <p>Year: {movie.Year}</p>
//                 <p>type: {movie.Type}</p>
//                 <img
//                   src={movie.Poster}
//                   alt={`${movie.Title} Poster`}
//                   style={{ height: "300px", width: "300px" }}
//                 />
//               </div>
//             ))
//           ) : (
//             <p>No movies found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieSearch;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieSearch.css";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = "861612a7cedefcb2c89708203ad548df"; // Replace with your TMDb API key

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

      try {
        const response = await axios.get(url);
        const data = response.data.results;
        setMovies(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{
              height: "280px",
              width: "200px",
              overflow: "hidden",
              objectFit: "cover",
            }}
          />
          <p>{movie.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieSearch;
