import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Styles } from "../styles";
import {  Input, FormControl } from "native-base";
export default function Login({ navigation }) {
  return (
    <>
      <>
        <View style={Styles.containerLogin}>
          <Image source={require("../../assets/logIcon.png")} />
        </View>
        <Text style={Styles.containerLogin.textLogin}>Login</Text>
        <View style={Styles.containerLogin.formArea}>
          <FormControl style={Styles.containerLogin.formLogin} marginBottom={5}>
            <Input type="email" placeholder="Email..." />
          </FormControl>
          <FormControl style={Styles.containerLogin.formLogin}>
            <Input type="password" placeholder="Password..." />
          </FormControl>
        </View>
        <View style={Styles.containerLogin.buttonArea}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate("Index")}
          >
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={Styles.containerLogin.text}>
          New User ?{" "}
          <Text style={Styles.containerLogin.text.reg} onPress={() => navigation.navigate("Register")}>Register</Text>
        </Text>
      </>
    </>
  );
}
