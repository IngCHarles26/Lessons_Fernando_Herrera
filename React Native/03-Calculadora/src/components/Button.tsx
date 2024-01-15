import { Text, TouchableOpacity, View } from "react-native";
import {  gapRowButton, sizeButton, style } from "../theme/appTheme";

interface Props{
  symbol:     string,
  background: string,
  color:      string,
  width?:     boolean,
  action?:    ()=>void,
}

const width2 = sizeButton *2 + gapRowButton;

function Button({symbol,background,color,width=false,action}:Props) {

  return ( 
    <TouchableOpacity onPress={action}>
      <View style={{...style.button,
        backgroundColor: background,
        width: width ? width2 : sizeButton,
      }}>

        <Text style={{...style.textButton, color: color}}>
          {symbol}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

export default Button;