import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    backgroundColor: '#fff',
  },
  searchButton: {
    backgroundColor: '#841584',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatList: {
    marginTop: 20,
    width: '100%',
  },
  noResultsText: {
    fontSize: 18,
    color: '#fff',
  },
  movieInfo: {
    marginBottom: 20,
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff',
  },
  movieYear: {
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
