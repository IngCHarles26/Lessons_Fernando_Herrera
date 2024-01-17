import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AlbumScreen from '../screens/AlbumScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigaro() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactScreen" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default TopTabNavigaro;