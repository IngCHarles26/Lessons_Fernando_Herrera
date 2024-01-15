import { Text, View } from "react-native";
import { backgrounds, style } from "../theme/appTheme";
import Button from "../components/Button";
import { useCalculator } from "../hooks/useCalculator";

function CalculadoraScreen() {

  const {number,prevNumber,operation,
    clean,changeSign,deleteOneNumber,changeOperation,buildNumber,solve} = useCalculator();

  return ( 
    <View style={style.calculatorContainer}>

      <Text style={style.beforeResult}> { prevNumber } {operation} </Text>

      <Text style={style.result} numberOfLines={1} adjustsFontSizeToFit> { number } </Text>

      <View style={style.rowButtons}>
        <Button action={()=>clean()}
          color="black" symbol="C"   background={backgrounds.topSymbols} />
        <Button action={changeSign} 
          color="black" symbol="+/-" background={backgrounds.topSymbols} />
        <Button action={deleteOneNumber} 
          color="black" symbol="DEL" background={backgrounds.topSymbols} />
        <Button action={()=>changeOperation('/')}
          color="white" symbol="/"   background={backgrounds.rightSymbols} />
      </View>

      <View style={style.rowButtons}>
        <Button action={ ()=>buildNumber('7') }
          color="white" symbol="7" background={backgrounds.symbols} />
        <Button action={ ()=>buildNumber('8') }
          color="white" symbol="8" background={backgrounds.symbols} />
        <Button action={ ()=>buildNumber('9') }
          color="white" symbol="9" background={backgrounds.symbols} />
        <Button action={()=>changeOperation('x')}
          color="white" symbol="𝕏" background={backgrounds.rightSymbols} />
      </View>

      <View style={style.rowButtons}>
        <Button action={ ()=>buildNumber('4')}
          color="white" symbol="4" background={backgrounds.symbols} />
        <Button action={ ()=>buildNumber('5')}
          color="white" symbol="5" background={backgrounds.symbols} />
        <Button action={ ()=>buildNumber('6')}
          color="white" symbol="6" background={backgrounds.symbols} />
        <Button action={()=>changeOperation('-')}
          color="white" symbol="-" background={backgrounds.rightSymbols} />
      </View>

      <View style={style.rowButtons}>
        <Button action={ ()=>buildNumber('1')}
          color="white" symbol="1" background={backgrounds.symbols} />
        <Button action={ ()=>buildNumber('2')}
          color="white" symbol="2" background={backgrounds.symbols} />
        <Button action={ ()=>buildNumber('3')}
          color="white" symbol="3" background={backgrounds.symbols} />
        <Button action={()=>changeOperation('+')}
          color="white" symbol="+" background={backgrounds.rightSymbols} />
      </View>

      <View style={style.rowButtons}>
        <Button action={ ()=>buildNumber('0')}
          color="white" symbol="0" background={backgrounds.symbols} width/>
        <Button action={ ()=>buildNumber('.')}
          color="white" symbol="." background={backgrounds.symbols} />
        <Button action={ solve }
          color="white" symbol="=" background={backgrounds.rightSymbols} />
      </View>
    </View>
  );
}

export default CalculadoraScreen;