import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  searchLink: {
    alignItems: 'center',
    marginVertical: 20,
  },
  searchText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  clickableText: {
    color: '#5ca3fc',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default styles;
