import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import { useWindowDimensions } from "react-native";

const Drawer = createDrawerNavigator();

function DrawerNavigation() {

  const {width} = useWindowDimensions();

  return ( 
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: width >=699 ? 'permanent' : 'front',  //esto sirve para que el drawer se quede fijo cuando se
        // swipeEnabled: true
      }}
    >
      <Drawer.Screen name='StackNavigator' options={{title:'Home'}} component={StackNavigator}/>
      <Drawer.Screen name='SettingsScrenn' options={{title:'Settings'}} component={SettingsScreen}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;