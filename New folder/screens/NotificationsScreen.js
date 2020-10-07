import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{padding: 10, fontSize: 20}}>No new Notifications</Text>
      <Button style={{width: '100%'}}
        title="Return to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};

export default HomeScreen;