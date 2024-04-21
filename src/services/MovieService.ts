import axios from 'axios';
import { Movie } from '../utils/types';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '4d9cffb6'; // Replace 'your_api_key_here' with your actual API key from OMDB

const MovieService = {
  getRandomMovies: async (): Promise<Movie[]> => {
    try {
      const response = await axios.get(`${API_URL}?s=random&type=movie&apikey=${API_KEY}`);
      return response.data.Search || [];
    } catch (error) {
      throw new Error('Failed to fetch random movies');
    }
  },
  searchMovies: async (query: string): Promise<Movie[]> => {
    try {
      const response = await axios.get(`${API_URL}?s=${query}&type=movie&apikey=${API_KEY}`);
      return response.data.Search || [];
    } catch (error) {
      throw new Error('Failed to search movies');
    }
  },
};

export default MovieService;
