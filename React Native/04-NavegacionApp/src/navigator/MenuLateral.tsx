import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { styles } from "../theme/appTheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import Tabs from "./Tabs";

const Drawer = createDrawerNavigator();

function MenuLateral() {

  const {width} = useWindowDimensions();

  return ( 
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >=699 ? 'permanent' : 'front',  //esto sirve para que el drawer se quede fijo cuando se
      }}
      drawerContent={(props)=> <MenuInterno {...props}/>}
    >
      <Drawer.Screen name='Tabs' component={Tabs}/>
      <Drawer.Screen name='SettingsScrenn' component={SettingsScreen}/>
    </Drawer.Navigator>
  );
}

const MenuInterno = (props: DrawerContentComponentProps) => {
    const {navigation} = props;


    return(
      <DrawerContentScrollView>
        <View style={styles.avatarBox}>
          <Image 
            source={{uri: ('https://cdn5.vectorstock.com/i/1000x1000/43/94/default-avatar-photo-placeholder-icon-grey-vector-38594394.jpg')}}
            style={styles.avatar}/>
        </View>

        {/* OPciones de Menu */}

        <View style={styles.menuBox}>

          <TouchableOpacity 
            onPress={()=>navigation.navigate('Tabs')}
            style={styles.menuBoton}>
            <Text style={styles.menuText}>
              Navegacion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=>navigation.navigate('SettingsScrenn')}
            style={styles.menuBoton}>
            <Text style={styles.menuText}>
              Ajustes
            </Text>
          </TouchableOpacity>

        </View>
      </DrawerContentScrollView>
    )
}


export default MenuLateral;