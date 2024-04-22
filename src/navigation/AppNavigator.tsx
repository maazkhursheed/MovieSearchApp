import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen/MovieDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  MovieDetailScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Movies" component={HomeScreen} />
        <Stack.Screen name="Search Movies" component={SearchScreen} />
        <Stack.Screen name="Movie Details" component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
