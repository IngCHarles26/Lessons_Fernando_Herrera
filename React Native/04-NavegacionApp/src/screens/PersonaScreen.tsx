import { Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigator/StackNavigator";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";


//forma sucia
interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{

}

function PersonScreen(props:Props) {
  console.log(props)
  const {changeUserName} = useContext( AuthContext)

  const {navigation,route} = props;

  const params = route.params;
  
  useEffect(()=>{
    changeUserName(params.name)
  },[])

  return ( 
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
        {JSON.stringify(params,null,3)}
      </Text>
    </View>
  );
}

export default PersonScreen;