import { useEffect, useState } from "react";
import moviesAPI, { urls } from "../api/movieAPI";
import { Movie, MovieAPIResponse } from "../interfaces/movieAPI";

interface MoviesState{
  nowPlaying: Movie[],
  popular:    Movie[],
  top:        Movie[],
  upComming:  Movie[],
}

const initialState:MoviesState = {
  nowPlaying: [],
  popular:    [],
  top:        [],
  upComming:  [],
}

function useMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>(initialState);

  let [key,value] = [Object.keys(urls),Object.values(urls).map(el=>moviesAPI.get<MovieAPIResponse>(el))];

  const getMovies = async ()=>{
    try{

      const value1 = (await Promise.all( value )).map(el=>el.data.results);
      let movies:MoviesState = initialState;
      key.forEach((el,ix)=> movies = {...movies,[el]:value1[ix]})

      setMoviesState({...movies});
      setIsLoading(false);

    } catch{ console.log('Ocurrió algo con la peticion de nowMovies'); }

  }
  
  useEffect(()=>{

    getMovies()
  
  },[])

  return {
    moviesState,
    isLoading,
  };
}

export default useMovies;

