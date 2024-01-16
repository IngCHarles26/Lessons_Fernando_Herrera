import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { Props } from "../interfaces/interface";
import { useEffect } from "react";

function Pagina2Screen(props:Props) {

  const {navigation} = props;

  //only for ios
  useEffect(()=>{
    navigation.setOptions({
      title: 'holi', //cambia el texto que aparece a lado del boton de navegacion
      headerBackTitle: 'Atras'
    })
  },[])

  return ( 
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        Página 2 screen
      </Text>

      <Button
        title="Ir página 3"
        onPress={()=> navigation.navigate('Pagina3Screen')}
      />

    </View>
  );
}

export default Pagina2Screen;