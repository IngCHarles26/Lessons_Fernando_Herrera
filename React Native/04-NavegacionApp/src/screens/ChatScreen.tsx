import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

function ChatScreen() {

  const {signIn,authState} = useContext( AuthContext );


  return ( 
    <View>
      <Text>
        Chat Screen
      </Text>

      {!authState.isLoggedIn && <Button
        title="SignIn"
        onPress={ signIn }
      />}
    </View>
  );
}

export default ChatScreen;