import { StackScreenProps } from "@react-navigation/stack";
import { ActivityIndicator, Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParams } from "../navigator/Navigation";
import { pictures } from "../api/movieAPI";
import Icon from 'react-native-vector-icons/Ionicons';
import useDetail from "../hooks/useDetail";
import { useNavigation } from "@react-navigation/native";

const screenH = Dimensions.get('screen').height;



interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};

function DetailScreen({route}:Props) {

  const movie = route.params;
  const uri = `${pictures.posterPath}${movie.poster_path}`;
  
  const {state} = useDetail(movie.id);

  const navigation = useNavigation();

  return ( 
    <ScrollView>

      <View style={styles.container}>

        <Image source={{uri}} style={styles.posterImage}/>

      </View>

      <View style={styles.titleContainer}>

        <Text style={styles.subTitle}>{movie.original_title}</Text>

        <Text style={styles.title}>{movie.title}</Text>

      </View>

      <View style={{marginTop:15}}>

        {state.isLoading 
          ? <ActivityIndicator color='grey' size={30} />
          : <View style={{marginHorizontal:20}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>

                <Icon name='star-outline' color='grey' size={20}/>
                <Text style={{color: 'black'}}> {state.movieDetail.vote_average}</Text>

                <Text style={{marginLeft:5,color:'black'}}>{state.movieDetail.genres.map(el=>el.name).join(', ')}</Text>

              </View>
              
              <Text style={{fontSize: 23, marginTop: 5, fontWeight: 'bold', color: 'black'}}> Sinopsis</Text>
              <Text style={{color: 'black', textAlign: 'justify'}}>{state.movieDetail.overview}</Text>

              <Text style={{fontSize: 23, marginTop: 5, fontWeight: 'bold', color: 'black'}}> Presupuesto</Text>
              <Text style={{color: 'black', textAlign: 'justify'}}>$ {state.movieDetail.budget/1000000} millones</Text>

              <View>
                <Text style={{fontSize: 23, marginTop: 5, fontWeight: 'bold', color: 'black'}}> Cast</Text>
                <ScrollView horizontal={true} style={{marginVertical:10,}}>
                {
                  state.cast.map(el=>{
                    return(
                      <View style={{flexDirection: 'row', marginHorizontal: 4, backgroundColor: '#eee', padding: 5,borderRadius: 10, }}>
                        {el.profile_path&&<Image style={{width:50, height:50, borderRadius:10,}} source={{uri:`${pictures.posterPath}${el.profile_path}`}}/>}
                        <View style={{marginLeft:4, }}>
                          <Text style={{fontSize: 18, color:'black', fontWeight: 'bold'}}>{el.name}</Text>
                          <Text style={{fontSize: 16, color:'black', opacity: 0.7}}>{el.character}</Text>
                        </View>
                      </View>
                    )})
                }
                </ScrollView>

              </View>

            </View>

          }   
      </View>
        <Button
          // @ts-ignore
          onPress={()=>navigation.navigate('HomeScreen')}
          title="Home"
          color='#334433'          
          />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: screenH*0.7,
    // paddingBottom: 10,
    // backgroundColor: 'red',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,

  },
  posterImage:{
    flex:1,
    // aspectRatio: 0.5624,
  },
  titleContainer:{
    marginTop: 10,
    marginHorizontal: 20,
  },
  subTitle:{
    fontSize: 16,
    color: 'black',
    opacity: 0.8,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }
})

export default DetailScreen;