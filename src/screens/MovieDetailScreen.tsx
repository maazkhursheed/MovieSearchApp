import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Movie } from '../utils/types';

interface Props {
  route: { params: { movie: Movie } };
}

const getRatingFromReview = (review: string) => {
  if (review.includes('Awesome') || review.includes('Must watch')) {
    return (Math.random() * (5 - 4) + 4).toFixed(1); // Positive review, higher rating
  } else if (review.includes('Not worth') || review.includes('Disappointing')) {
    return (Math.random() * (2 - 1) + 1).toFixed(1); // Negative review, lower rating
  } else {
    return (Math.random() * (4 - 2) + 2).toFixed(1); // Neutral review, medium rating
  }
};

const getRandomReview = () => {
  const reviews = [
    'Awesome movie! Must watch!',
    'Disappointing. Expected better.',
    'One of the best movies I have ever seen!',
    'Good storyline and great acting.',
    'Not worth the hype.',
  ];
  return reviews[Math.floor(Math.random() * reviews.length)];
};

const MovieDetailScreen: React.FC<Props> = ({ route }) => {
  const { movie } = route.params;
  const [rating, setRating] = useState('0');
  const [review, setReview] = useState('');

  useEffect(() => {
    const randomReview = getRandomReview();
    setReview(randomReview);
    const calculatedRating = getRatingFromReview(randomReview);
    setRating(calculatedRating);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/movie-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Image source={{ uri: movie?.Poster }} style={styles.poster} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{movie?.Title}</Text>
            <Text style={styles.info}>Year: {movie?.Year}</Text>
            <Text style={styles.info}>Type: {movie?.Type}</Text>
            <Text style={styles.info}>IMDb ID: {movie?.imdbID}</Text>
            <Text style={styles.info}>Rating: {rating}</Text>
            <Text style={styles.info}>Review: {review}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
  },
  poster: {
    width: '100%',
    height: 400,
    marginBottom: 20,
    resizeMode: 'fit',
  },
  detailsContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
    color: '#fff',
  },
});

export default MovieDetailScreen;
