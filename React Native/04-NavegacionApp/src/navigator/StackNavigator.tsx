import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonScreen from '../screens/PersonaScreen';

export type RootStackParams = {
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: {id:number, name: string},
}

const Stack = createStackNavigator<RootStackParams>();

function StackNavigator() {
  return (
    <Stack.Navigator
      //initialRouteName='' //le indica cual va a ser la pagina inicial
      screenOptions={{
        // headerShown: false, //le indica si se va a mostrar el header del stack.screen
        cardStyle:{
        
        },
        headerStyle:{
          
        }
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{title: 'Página 1'}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title: 'Página 2'}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title: 'Página 3'}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;