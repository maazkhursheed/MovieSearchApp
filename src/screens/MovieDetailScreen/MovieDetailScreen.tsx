import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import { Movie } from '../../utils/types';
import styles from "./styles";
import { getRandomReview, getRatingFromReview } from "../../utils/CommonHelper";
import CustomText from "../../components/CustomText";

interface Props {
  route: { params: { movie: Movie } };
}

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
        source={require('../../assets/movie-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Image source={{ uri: movie?.Poster }} style={styles.poster} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{movie?.Title}</Text>
            <CustomText text={`Year: ${movie?.Year}`} />
            <CustomText text={`Type: ${movie?.Type}`} />
            <CustomText text={`IMDb ID: ${movie?.imdbID}`} />
            <CustomText text={`Rating: ${rating}`} />
            <CustomText text={`Review: ${review}`} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MovieDetailScreen;
