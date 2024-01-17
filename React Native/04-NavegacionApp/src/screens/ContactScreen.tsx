import { Button, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function ContactScreen() {

  const {logOut,authState} = useContext( AuthContext );

  return ( 
    <View>
      <Text>
        Contact Screen
      </Text>

      {authState.isLoggedIn && <Button
        title="Logout"
        onPress={ logOut }
      />}
    </View>
  );
}

export default ContactScreen;