import { StackScreenProps } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParams } from "../navigator/StackNavigator";


interface Props extends StackScreenProps<RootStackParams,'Pagina1Screen'>{}

function Pagina1Screen(props:Props) {
  const {navigation} = props;

  return ( 
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        Página 1 screen
      </Text>

      <Button
        title="Ir página 2"
        onPress={()=> navigation.navigate('Pagina2Screen')}
      />


      <Text>Navegando con argumentos</Text>

      <View style={{flexDirection: 'row',gap: 10,justifyContent: 'center'}}>

        <TouchableOpacity
          style={styles.botonGrande}
          onPress={()=>navigation.navigate('PersonaScreen',{id:1,name:'Pedro'})}
          >
          <Text style={styles.title}>
            Pedro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonGrande}
          onPress={()=>navigation.navigate('PersonaScreen',{id:2,name:'Maria'})}
          >
          <Text style={styles.title}>
            Maria
          </Text>
        </TouchableOpacity>
      
      </View>

    </View>
  );
}

export default Pagina1Screen;