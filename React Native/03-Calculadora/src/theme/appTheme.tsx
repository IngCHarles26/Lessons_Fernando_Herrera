import { StyleSheet } from "react-native";

export const sizeButton = 85;

export const gapRowButton = 30;

const fontColor = {
  result: 'white',
  beforeResult: '#FFFFFF70',
  button1: 'white',
  button2: 'black',
}

export const backgrounds = {
  main: 'black',
  symbols: '#333333',
  topSymbols: '#9B9B9B',
  rightSymbols: '#FF9427',
}

const sizeFonts = {
  result: 60,
  beforeResult: 40,
}


export const style = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor: backgrounds.main,
  },
  calculatorContainer:{
    flex:1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  result:{
    fontSize: sizeFonts.result,
    color: fontColor.result,
    textAlign: 'right',
    marginBottom: 18,
  },
  beforeResult:{
    color: fontColor.beforeResult,
    textAlign: 'right',
    fontSize: sizeFonts.beforeResult,
  },
  button:{
    height: sizeButton,
    width: sizeButton,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textButton:{
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  rowButtons:{
    flexDirection: 'row',
    marginBottom: 18,
    justifyContent: 'center',
    gap: gapRowButton,

  },

})