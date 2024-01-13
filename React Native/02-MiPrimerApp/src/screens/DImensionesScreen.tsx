import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from "react-native";

const dimensionsOnly = Dimensions.get('window');


function DimensionesScreen() {
  const dimensionsHook = useWindowDimensions();
  return ( 
    <View>
      <Text style={styles.title}>W1: {dimensionsOnly.width}, H1: {dimensionsOnly.height} </Text>
      <Text style={styles.title}>W2: {dimensionsHook.width}, H2: {dimensionsHook.height} </Text>
      <View style={styles.container}>
        <View style={{
          ...styles.firstBox,
          width: dimensionsHook.width*0.2
        }}/> 
        <View style={styles.secondBox}/> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height: 600,
    backgroundColor: 'red',
  },
  firstBox:{
    backgroundColor:'#5856D6',
    height:'50%',
    width:'50%',

  },
  secondBox:{
    backgroundColor: '#f0a23b',
    height: '20%',
    width: '10%'
  },
  title:{
    fontSize: 20,
  }
})

export default DimensionesScreen;