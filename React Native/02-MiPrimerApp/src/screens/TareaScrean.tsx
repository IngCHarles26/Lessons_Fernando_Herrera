import { StyleSheet, View } from "react-native";

function TareaScreen() {
  return ( 
    <View style={styles.container}>
      <View style={styles.cajaMorada}/>
      <View style={styles.cajaNaranja}/>
      <View style={styles.cajaAzul}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#28435b',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cajaMorada:{
    width:100,
    height:100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja:{
    width:100,
    height:100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#f0a23b',
    top: 50,
  },
  cajaAzul:{
    width:100,
    height:100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#23c4d9',
  }
})

export default TareaScreen;