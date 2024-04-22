import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ImageBackground, ActivityIndicator, Modal, TouchableWithoutFeedback } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Import Redux hooks
import MovieService from '../../services/MovieService'; // Import the service
import styles from "./styles";
import CustomText from "../../components/CustomText";
import { Movie } from '../../utils/types';
import { setSelectedMovieDetail } from "../../redux/moviesSlice"; // Import the Redux action

interface Props {
  route: { params: { movie: Movie } };
}

const MovieDetailScreen: React.FC<Props> = ({ route }) => {
  const { movie } = route.params;
  const dispatch = useDispatch(); // Redux dispatch function

  // Redux selector to access selected movie details from Redux store
  const selectedMovieDetails = useSelector(state => state.movies.selectedMovieDetail);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  const [modalVisible, setModalVisible] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await MovieService.getSelectedMovieDetails(movie.imdbID);
        dispatch(setSelectedMovieDetail(details)); // Dispatch the action to set selected movie details in Redux store
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [dispatch, movie.imdbID]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/movie-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          {isLoading ? (
            <View style={[styles.container, styles.loaderContainer]}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
          ) : (
            <>
              <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <Image source={{ uri: selectedMovieDetails?.Poster }} style={styles.poster} />
              </TouchableWithoutFeedback>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{selectedMovieDetails?.Title}</Text>
                <CustomText text={`Year: ${selectedMovieDetails?.Year}`} />
                <CustomText text={`Type: ${selectedMovieDetails?.Type}`} />
                <CustomText text={`IMDB Rating: ${selectedMovieDetails?.imdbRating}`} />
                <CustomText text={`Actors: ${selectedMovieDetails?.Actors}`} />
                <CustomText text={`Awards: ${selectedMovieDetails?.Awards}`} />
                <CustomText text={`Genre: ${selectedMovieDetails?.Genre}`} />
                <CustomText text={`Language: ${selectedMovieDetails?.Language}`} />
                <CustomText text={`Released: ${selectedMovieDetails?.Released}`} />
                <CustomText text={`Writer: ${selectedMovieDetails?.Writer}`} />
                <CustomText text={`Plot: ${selectedMovieDetails?.Plot}`} />
              </View>
              <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                  <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <Image source={{ uri: selectedMovieDetails?.Poster }} style={styles.modalImage} />
                  </TouchableWithoutFeedback>
                  <Text style={styles.zoomText}>Click on picture again to zoom out</Text>
                </View>
              </Modal>
            </>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MovieDetailScreen;
