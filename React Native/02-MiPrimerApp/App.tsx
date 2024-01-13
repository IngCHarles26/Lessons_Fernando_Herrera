import { SafeAreaView } from "react-native";
import BoxObjectModelScreen from "./src/screens/BoxObjectModelScreen";
import ContadorScreen from "./src/screens/ContadorScreen";
import HolaMundoScreen from "./src/screens/HolaMundoScreen";
import DimensionesScreen from "./src/screens/DImensionesScreen";
import PositionScreen from "./src/screens/PositionScreen";
import FlexScreen from "./src/screens/FlexScreen";
import TareaScreen from "./src/screens/TareaScrean";

function App() {
  
  return ( 
    <SafeAreaView style={{flex:1}}>
      <TareaScreen/>
    </SafeAreaView>
  );
}

export default App;