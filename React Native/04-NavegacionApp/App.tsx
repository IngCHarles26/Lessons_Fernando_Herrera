import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

import { Text, View } from "react-native";
import StackNavigator from './src/navigator/StackNavigator';
import DrawerNavigation from './src/navigator/DrawerNavigator';
import MenuLateral from './src/navigator/MenuLateral';

function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <MenuLateral/>
    </NavigationContainer> 
  );
}

export default App;