import { StyleSheet } from "react-native";

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

export default styles;
