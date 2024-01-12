import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from "react-native";

interface Props{
  title: string,
  position: 'br' | 'bl',
  onPress: ()=>void,
}

function Fab(props:Props) {
  const {title,onPress,position} = props;

  return ((Platform.OS=='android') 
  ? 
    // Android
    <View style={[
        style.fabLocation,
        (position=='bl') 
          ? style.bl 
          : style.br
      ]}>
      <TouchableNativeFeedback
          onPress={ onPress }
          background={TouchableNativeFeedback.Ripple('28425b',false,30)}
        >

        <View style={style.fab}>

          <Text style={style.textFab}>{title}</Text>
          
        </View>

      </TouchableNativeFeedback>
    </View>
  : 
    //ios
    <TouchableOpacity 
        onPress={ onPress }
        activeOpacity={ 0.5}
        style={[
          style.fabLocation,
          (position=='bl')
            ? style.bl
            : style.br,
        ]}
      >
      <View style={style.fab}>
        <Text style={style.textFab}>{title}</Text>
      </View>
    </TouchableOpacity>);
}

const style = StyleSheet.create({
  fabLocation:{
    position: 'absolute',
    bottom: 20,
  },
  fab:{
    backgroundColor:'#5856d6',
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  textFab:{
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  bl:{
    left: 25,
  },
  br:{
    right: 25,
  }

})

export default Fab;