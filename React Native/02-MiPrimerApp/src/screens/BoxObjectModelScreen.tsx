import { StyleSheet, Text, View } from "react-native";

function BoxObjectModelScreen() {
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'green',
  },
  title:{
    fontSize: 20,
    backgroundColor: 'red',
    width: 150,
    borderWidth: 10,
  }
})

export default BoxObjectModelScreen;