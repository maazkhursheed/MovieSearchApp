import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRandomMovies } from '../../redux/moviesSlice'; // Import the Redux action
import { useNavigation } from '@react-navigation/native';
import MovieCard from '../../components/MovieCard';
import MovieService from '../../services/MovieService';
import styles from "./styles";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const randomMovies = useSelector(state => state.movies.randomMovies);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const movies = await MovieService.getRandomMovies();
        dispatch(setRandomMovies(movies)); // Dispatch the action to set random movies
      } catch (error) {
        console.error('Error fetching random movies:', error);
      }
    };

    fetchRandomMovies();
  }, [dispatch]);

  const handleSearchNavigation = () => {
    // Navigate to the SearchScreen when clicked
    navigation.navigate('Search Movies');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/movie-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableOpacity onPress={handleSearchNavigation} style={styles.searchLink}>
          <Text style={styles.searchText}>For more interesting movies <Text style={styles.clickableText}>Search Here</Text></Text>
        </TouchableOpacity>
        <FlatList
          data={randomMovies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
