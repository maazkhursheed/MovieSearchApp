import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, StyleSheet, Text, ImageBackground, ActivityIndicator } from "react-native";
import MovieCard from '../../components/MovieCard';
import MovieService from '../../services/MovieService';
import { Movie } from '../../utils/types';
import styles from "./styles";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const movies = await MovieService.searchMovies(searchQuery);
      setSearchResults(movies);
      setSearchError('');
    } catch (error) {
      console.error('Error searching movies:', error);
      setSearchError('No results found');
    } finally {
      setIsLoading(false);
    }
  };

  const clearSearchResults = () => {
    setSearchResults([]);
    setSearchError('');
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
        {searchResults.length > 0 ? (
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
        ) : (
          searchError !== '' && <Text style={styles.noResultsText}>{searchError}</Text>
        )}
      </View>
    </ImageBackground>
  );
};

export default SearchScreen;
