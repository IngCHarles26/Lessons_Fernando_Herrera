import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import TopTabNavigaro from './TopTabNavigaro';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'green',
        
      }}
      screenOptions={{
        tabBarActiveTintColor:'brown',
        tabBarActiveBackgroundColor: 'red',
        // tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle:{
          fontSize: 30,
          color: colors.primary,
        },
        tabBarStyle:{
          borderTopWidth: 0,
          elevation: 0,
        },

      }}

    >
      <Tab.Screen name="Tab1Screen" options={{title: 'Tab1'}} component={Tab1Screen} />
      <Tab.Screen name="TopTabScreen" options={{title: 'TopTab'}} component={TopTabNavigaro} />
      <Tab.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
    </Tab.Navigator>
  );
}

export default Tabs;