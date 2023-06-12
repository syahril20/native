import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    marginTop: 150,
    alignItems: "center",
  },
  containerLogin: {
    marginTop: 50,
    alignItems: "center",
    text:{
      textAlign: "center",
      marginTop: 10,
      reg:{
        color:"#FF5555",
        fontFamily: "Poppins_700Bold",
      },
    },
    formArea:{
        alignItems: "center",
    },
    textLogin: {
      marginTop: 150,
      fontSize: 30,
      paddingLeft: "5%",
      paddingRight: "5%",
      fontFamily: "Poppins_700Bold",
    },
    formLogin: {
      width: "90%",
      paddingRight: "5%",
    },
    buttonArea: {
        alignItems: "center",
        marginTop: 20,
      },
  },

  text: {
    width: "60%",
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginTop: 30,
  },
  buttonArea: {
    alignItems: "center",
    marginTop: 200,
  },
  button: {
    backgroundColor: "#FF5555",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 5,

  },
  buttonReg: {
    backgroundColor: "#0000004F",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    borderRadius: 5,
    marginTop: 10,

  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#FFFFFF",
  },
});
