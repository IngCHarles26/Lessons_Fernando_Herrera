import { Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

function SettingsScreen() {

  const insets = useSafeAreaInsets();

  return ( 
    <View style={{marginTop: insets.top}}>
      <Text style={{color: 'black', fontSize: 30}}>
        Settings Screen
      </Text>
    </View>
  );
}

export default SettingsScreen;