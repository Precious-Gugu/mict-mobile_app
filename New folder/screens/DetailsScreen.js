import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { max } from "react-native-reanimated";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The University of Johannesburg’s Metal Casting Technology Station (MCTS) is an initiative of the then [LN1] Department of Science and Technology (now Department of Science and Innovation - DSI) under the Technology Innovation Agency (TIA). The MCTS operates under the Faculty of Engineering and the Built Environment in partnership with the Department of Metallurgy.</Text>

      <Text style={styles.text}>{"\n"}The VISION of MCTS is “to be a world-class innovation facility that supports and enables technological innovations in the metals casting industry to achieve socio-economic benefits for South Africa”, with the MISSION to “support technology innovators to unlock South Africa’s metal casting industry’s global competitiveness and to deliver socio-economic value”.</Text>

      <Text style={styles.text}>{"\n"}The MCTS supports and assists the Metal Casting industry; Foundries, Suppliers and related industries, to improve the sectors innovation ability for increased competitiveness and sustainability, with the following FOCUS AREAS:{"\n"}
      {"\n"}-  Physical Metallurgy
          {"\n"}- Moulding Technology 
          {"\n"}- Foundry Technology
          {"\n"}- Support services
          {"\n"}
      </Text>
      <Button style={styles.button} title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },

  text: {
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    bottom: 0,
    width: '100%',
    flex: 1
    
  },
});
