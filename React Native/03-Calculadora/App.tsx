import { SafeAreaView, StatusBar, Text, View } from "react-native";
import CalculadoraScreen from "./src/screen/CalculadoraScreen";
import { style } from "./src/theme/appTheme";

function App() {
  return ( 
    <SafeAreaView style={style.main}>
      <StatusBar
        backgroundColor='yellow'  //Esto le dá el color de fondo a la barra de notificaciones en android
        barStyle="light-content"  // Esto le indica el estilo de la barra de notificaciones en ios
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  );
}



export default App;