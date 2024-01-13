import { StyleSheet, View } from "react-native";

function PositionScreen() {
  return ( 
    <View style={styles.container}>
      <View style={styles.cajaMorada}/>
      <View style={styles.cajaNaranja}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#28c4d9',
    height: 400,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  cajaMorada:{
    width:100,
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
  },
  cajaNaranja:{
    width:100,
    height: 100,
    backgroundColor: '#f0a23b',
    borderWidth: 10,
    borderColor: 'white'
  },
})

export default PositionScreen;