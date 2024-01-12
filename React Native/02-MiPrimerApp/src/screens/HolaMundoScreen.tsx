import { Text, View } from "react-native";

//Screen se le dice al componenet que va a ocupar toda la pantalla

function HolaMundoScreen() {
  return ( 
    <View style={{
        flex:1,
        justifyContent: 'center',
      }}>
    <Text style={{
        fontSize: 45,
        textAlign: "center"
      }}>
      Hola Mundo
    </Text>
  </View>
  );
}

export default HolaMundoScreen;