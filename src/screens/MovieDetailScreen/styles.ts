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
    height: 300,
    marginBottom: 15,
    resizeMode: 'contain',
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
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  zoomText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
