import React from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";

import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SignInScreen from "./SignInScreen";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../assets/mtcm.png")}
          source={require("../assets/mtc.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Metal Casting technology station</Text>
        <Text style={styles.text}>
        The University of Johannesburg's Metal Casting Technology Station (MCTS) is an
          {"\n"}initiative of the then [LN1] Department of Science and technology
          {"\n"}(now Department of Science and Innovation - DSI) under
          {"\n"}the Technology innovation Agency (TIA). The MCTS operates 
          {"\n"}under the Faculty of Engineering and the Built Environment
          {"\n"}in partnership with the Department of Metallurgy
          {"\n"}
        </Text>
        <Button
          style={styles.button}
          title="Click to Continue"
          color="#2E1A46"
          onPress={() => navigation.navigate("SignInScreen")}
        />
        <Text style={styles.textSign}>Get Started</Text>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cb5c0d",
  },
  header: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#2E1A46",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
