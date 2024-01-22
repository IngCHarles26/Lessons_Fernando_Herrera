import { Image, StyleSheet, View } from "react-native";
import { Movie } from "../interfaces/movieAPI";
import { pictures } from "../api/movieAPI";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface Props {
  movie:    Movie,
}

function MoviePoster({
    movie,
  }:Props) {

  const uri = `${pictures.posterPath}${movie.poster_path}`;

  const navigation = useNavigation();

  return ( 
    <TouchableOpacity 
        // @ts-ignore
        onPress={()=> navigation.navigate('DetailScreen', movie)}
        style={{
          padding: 3,
        }}
        activeOpacity={0.8}
        >
      <View
        style={styles.container}
      >

        <Image source={{uri}} style={styles.image}/>

        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container:{
    height: '100%',
    marginHorizontal: 3,
    padding: 2,
    aspectRatio: 0.5624,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 5, },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 40,
  },

  image: {
    flex: 1,
    borderRadius: 10,
  }
})

export default MoviePoster;