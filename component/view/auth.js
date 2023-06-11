import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/dev";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {} from "native-base";
import { Styles } from "../styles";

export default function Auth({ navigation }) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={100} />;
  } else {
    return (
      <>
        <View>
          <View style={Styles.container}>
            <Image source={require("../../assets/loginLogo.png")} />
            <Image source={require("../../assets/ways.png")} />
            <Text style={Styles.text}>
              Write your activity and finish your activity. Fast, Simple and
              Easy to Use
            </Text>
          </View>
          <View style={Styles.buttonArea}>
            <TouchableOpacity
              style={Styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={Styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonReg}>
              <Text style={Styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
