import axios from 'axios';

const API_KEY = 'f4a4348ab293dd57195d1ff05caa9cd5';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function discoverMovies() {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
      sort_by: 'popularity.desc',
    },
  });
  return response.data.results;
}
