import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Fab from "../components/Fab";

function ContadorScreen() {
  const [contador, setContador] = useState(10);

  return ( 
    <View style={style.container}>

      <Text style={style.title}>
        Contador: {contador}
      </Text>

      <Fab 
        title="+1"
        onPress={()=>setContador(contador+1)}
        position="br"
        />
      <Fab 
        title="-1"
        onPress={()=>setContador(contador-1)}
        position="bl"
        />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 49,
    textAlign: 'center',
    color: 'black',
  },
})

export default ContadorScreen;