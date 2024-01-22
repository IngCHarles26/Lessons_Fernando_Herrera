import { ActivityIndicator, Dimensions, ScrollView, Text, View } from "react-native";
import useMovies from "../hooks/useMovies";
import MoviePoster from "../components/MoviePoster";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import HorizontalSlider from "../components/HorizontalSlider";

const {width:windowWidth} = Dimensions.get('window');

function HomeScreen() {

  const { isLoading, moviesState } = useMovies();
  const {top} = useSafeAreaInsets();


  if(isLoading){
    return(
      <View style={{flex:1, justifyContent: 'center', alignContent:'center'}}>
        <ActivityIndicator color='#ff9933' size={100}/>        
      </View>
    )
  }
  
  return ( 
    <ScrollView>
      <View style={{marginTop:top+20}}>

        {/* Carusel Principal */}
        <View style={{height: 530}}>
          <Carousel
            data={moviesState.nowPlaying}
            renderItem={({item}:any)=><MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider title="Popular"   movies={moviesState.popular}/>
        <HorizontalSlider title="Best"      movies={moviesState.top}/>
        <HorizontalSlider title="Camino"    movies={moviesState.upComming}/>



      </View>
    </ScrollView>
  );
}

export default HomeScreen;