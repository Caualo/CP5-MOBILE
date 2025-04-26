import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 10,
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 270,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
