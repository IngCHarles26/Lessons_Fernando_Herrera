import { useContext } from "react";
import { Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";
import Icon from "react-native-vector-icons/Ionicons";

function SettingsScreen() {

  const insets = useSafeAreaInsets();

  const { authState } = useContext( AuthContext );



  return ( 
    <View style={{marginTop: insets.top}}>
      <Text style={{color: 'black', fontSize: 30}}>
        Settings Screen
      </Text>
      <Text style={{color: 'black', fontSize: 30}}>
        {JSON.stringify(authState, null, 4)}
      </Text>
      {
        authState.favoriteIcon && 
        <Icon
        name={authState.favoriteIcon}
        size={30}
        color='black'
        />
      }
      
    </View>
  );
}

export default SettingsScreen;