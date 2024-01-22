import { Text, View } from "react-native";
import { Movie } from "../interfaces/movieAPI";
import { FlatList } from "react-native-gesture-handler";
import MoviePoster from "./MoviePoster";

interface Props{
  title: string,
  movies: Movie[],
}

function HorizontalSlider({
    title,
    movies
  }:Props) {


  return ( 
    <View style={{
      height: (title) ? 260 : 220, 
      marginVertical: 5}}>

      {title && <Text style={{fontSize: 30, fontWeight: 'bold',color:'black'}}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}:any)=><MoviePoster movie={item}/>}
        keyExtractor={(item)=>`${item.id}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default HorizontalSlider;