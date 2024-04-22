import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, ImageBackground, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import { setSearchResults } from '../../redux/moviesSlice'; // Import the Redux action
import MovieCard from '../../components/MovieCard';
import MovieService from '../../services/MovieService';
import styles from "./styles";

const SearchScreen = () => {
  const dispatch = useDispatch(); // Redux dispatch function
  const searchResults = useSelector(state => state.movies.searchResults); // Access search results from Redux store

  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const movies = await MovieService.searchMovies(searchQuery);
      dispatch(setSearchResults(movies)); // Dispatch the action to set search results in Redux store
      setSearchError('');
    } catch (error) {
      console.error('Error searching movies:', error);
      setSearchError('No results found');
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearchResults = () => {
    dispatch(setSearchResults([])); // Dispatch action to clear search results
    setSearchError('');
    setSearchQuery('');
  };

  return (
    <ImageBackground
      source={require('../../assets/movie-background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TextInput
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            if (!text) clearSearchResults();
          }}
          placeholder="Search movies..."
          style={styles.input}
          placeholderTextColor="#666"
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={handleSearch}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        {isLoading && <ActivityIndicator color="#fff" />}
        {searchQuery !== '' && searchResults.length > 0 && (
          <FlatList
            data={searchResults}
            renderItem={({ item }) => (
              <View style={styles.movieInfo}>
                <MovieCard movie={item} />
                <Text style={styles.movieTitle}>{item.Title}</Text>
                <Text style={styles.movieYear}>{item.Year}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
          />
        )}
        {searchQuery !== '' && searchResults.length === 0 && <Text style={styles.noResultsText}>{searchError}</Text>}
      </View>
    </ImageBackground>
  );
};

export default SearchScreen;
