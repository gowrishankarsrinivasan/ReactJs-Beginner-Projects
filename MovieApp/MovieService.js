// src/services/movieService.js

import axios from 'axios';

const API_KEY = 'http://www.omdbapi.com/?i=tt3896198&apikey=f99503c';
const BASE_URL = 'http://www.omdbapi.com/';

const movieService = axios.create({
  baseURL: BASE_URL,
});

export const searchMovies = async (query) => {
  try {
    const response = await movieService.get(`?apikey=${API_KEY}&s=${query}`);
    return response.data.Search || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
