import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

import { Text, View } from "react-native";
import StackNavigator from './src/navigator/StackNavigator';
import DrawerNavigation from './src/navigator/DrawerNavigator';
import MenuLateral from './src/navigator/MenuLateral';
import { AuthProvider } from './src/context/AuthContext';

function App() {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator/> */}
        <MenuLateral/>
      </AppState>
    </NavigationContainer> 
  );
}

function AppState({children}:any) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider> 
  );
}

export default App;