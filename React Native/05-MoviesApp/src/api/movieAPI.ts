import axios from "axios";


const api_key = '3bfc9df6c52dac801638150ac4fbf1ac';
const language = 'es-ES'

const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params:{
    api_key,
    language,
  }
})

export const urls = {
  nowPlaying: '/now_playing',
  popular: '/popular',
  top: '/top_rated',
  upComming: '/upcoming',
}

export const pictures = {
  posterPath: 'https://image.tmdb.org/t/p/w500',
}


export default moviesAPI;