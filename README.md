Got it! Here's how you can add images to your README file:

```markdown
# Movie Search App

This is a cross-platform mobile application developed using React Native and TypeScript that allows users to search for movies in an open API movie database.

## Setup Instructions

### Prerequisites

- Node.js installed on your machine (https://nodejs.org/)
- Expo CLI installed globally (`npm install -g expo-cli`)
- Android Studio or Xcode for running the app on a simulator or emulator

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/maazkhursheed/MovieSearchApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd MovieSearchApp
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

- To run the app on Android:

  ```bash
  npm run android
  ```

- To run the app on iOS:

  ```bash
  npm run ios
  ```

- To start the Metro Bundler:

  ```bash
  npm start
  ```

- Follow the instructions in the terminal to open the app in a simulator or scan the QR code using the Expo Go app on your physical device.

## Features

- Integration with Open API Movie Database
- Display 10 random movies on the home screen
- Search functionality to search for movies based on title or keywords
- Movie detail screen to view detailed information about a selected movie

## Bonus Features (TODO):

<!-- TODO: Complete the following tasks -->
- Demonstrate the usage of the developed SDK by integrating it in a React.js application to fetch and display movie data.
- Implement optimizations in the state manager solution to improve performance and efficiency.

## Additional Information

- This project was developed as part of a coding challenge.
- Feel free to explore the codebase and make any modifications or improvements.

## Screenshots

Here are some screenshots of the app:

![Home Screen](/screenshots/HomeScreenMovies.png)
![Movie Detail Screen](/screenshots/MovieDetailsScreen.png) 
![Movie Detail Screen ZoomedImage](/screenshots/ZoomedImage.png)
![Search Screen No Data](/screenshots/SearchMovieNoData.png)
![Search Screen](/screenshots/SearchMovieWithData.png)
