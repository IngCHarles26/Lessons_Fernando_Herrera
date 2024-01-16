import { Button, Text, View } from "react-native";
import { Props } from "../interfaces/interface";
import { styles } from "../theme/appTheme";

function Pagina3Screen(props:Props) {

  const {navigation} = props; 


  return ( 
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        Página 3 screen
      </Text>

      <Button
        title="Ir página 1"
        onPress={()=> navigation.navigate('Pagina1Screen')}
      />
    </View>
  );
}

export default Pagina3Screen;