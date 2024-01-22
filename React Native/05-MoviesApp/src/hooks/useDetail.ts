import { useEffect, useState } from "react";
import moviesAPI from "../api/movieAPI";
import { Cast, CastElement, MovieDetail } from "../interfaces/detail";

interface MovieDetails{
  isLoading: boolean,
  movieDetail: MovieDetail,
  cast: CastElement[],
}

const initialState:MovieDetails = {
  isLoading: true,
  // @ts-ignore
  movieDetail: {},
  cast: [],
}


function useDetail(idMovie:number) {

  const [state, setState] = useState<MovieDetails>(initialState);

  const getDetail = async () =>{
    try {
      const movieDetail : MovieDetail = (await moviesAPI.get<MovieDetail>(`/${idMovie}`)).data;
      const cast : CastElement[]    = (await moviesAPI.get<Cast>(`/${idMovie}/credits`)).data.cast;

      setState({
        isLoading: false,
        movieDetail,
        cast,
      })

    } catch (error) { console.log(error)   }
  }
  
  useEffect(()=>{
    getDetail();
  },[])


  return {
    state
  };
}

export default useDetail;