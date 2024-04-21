import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    randomMovies: [],
    searchResults: [],
    selectedMovie: null,
  },
  reducers: {
    setRandomMovies(state, action) {
      state.randomMovies = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
  },
});

export const { setRandomMovies, setSearchResults, setSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
