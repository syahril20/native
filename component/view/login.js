import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Styles } from "../styles";
import { NativeBaseProvider, Input, FormControl } from "native-base";
export default function Login() {
  return (
    <>
      <NativeBaseProvider>
        <View style={Styles.containerLogin}>
          <Image source={require("../../assets/logIcon.png")} />
        </View>
          <Text style={Styles.containerLogin.textLogin}>Login</Text>
        <View style={Styles.containerLogin.formArea}>
          <FormControl style={Styles.containerLogin.formLogin} marginBottom={5}>
            <Input placeholder="Email..." />
          </FormControl>
          <FormControl style={Styles.containerLogin.formLogin}>
            <Input placeholder="Password..." />
          </FormControl>
        </View>
        <View style={Styles.containerLogin.buttonArea}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </NativeBaseProvider>
    </>
  );
}
