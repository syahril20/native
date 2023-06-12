import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Styles } from "../styles";
import { NativeBaseProvider, Input, FormControl } from "native-base";

export default function Register({ navigation }) {
  return (
    <>
      <NativeBaseProvider>
        <View style={Styles.containerLogin}>
          <Image source={require("../../assets/logIcon.png")} />
        </View>
        <Text style={Styles.containerLogin.textLogin}>Register</Text>
        <View style={Styles.containerLogin.formArea}>
          <FormControl style={Styles.containerLogin.formLogin} marginBottom={5}>
            <Input type="email" placeholder="Email..." />
          </FormControl>
          <FormControl style={Styles.containerLogin.formLogin} marginBottom={5}>
            <Input type="text" placeholder="Name..." />
          </FormControl>
          <FormControl style={Styles.containerLogin.formLogin}>
            <Input type="password" placeholder="Password..." />
          </FormControl>
        </View>
        <View style={Styles.containerLogin.buttonArea}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={Styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <Text style={Styles.containerLogin.text}>
          Joined us before ?{" "}
          <Text style={Styles.containerLogin.text.reg} onPress={() => navigation.navigate("Login")}>Login</Text>
        </Text>
      </NativeBaseProvider>
    </>
  );
}
