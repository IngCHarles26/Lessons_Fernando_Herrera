import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from "../context/AuthContext";

interface Props {
  iconName: string,
}

function TouchableIcon( {iconName}:Props) {
  const {changeFavoriteIcon} = useContext( AuthContext)

  return ( 
    <TouchableOpacity
      onPress={()=>changeFavoriteIcon(iconName)}
    >
      <View>

        <Icon name={iconName} size={100} color="#4F8EF7" />
      </View>

    </TouchableOpacity>
  );
}

export default TouchableIcon;