import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  poster: {
    width: 300,
    height: 450,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  releaseDate: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
});
