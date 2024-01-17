import { Text, View } from "react-native";
import { colors } from "../theme/appTheme";
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableIcon from "../components/TouchableIcon";
// import Icon from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/FontAwesome5';


function Tab1Screen() {
  return ( 
    <View>
      <Text>

        <TouchableIcon iconName="albums"  />
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="desktop-outline" />

      </Text>


      
    </View>
  );
}

export default Tab1Screen;