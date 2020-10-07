import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";

const ExitToWeb = () => {
  return (
    <View style={{height: 150, width: 150, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
          <View style={{flex: 2}}>
            <Image source={require('../assets/MCTS-logo.jpg')} style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
          </View>
          <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
            <Text style={{fontWeight: '400', fontSize: 18}}>
                visit our Website
            </Text>
          </View>
          
        </View>
);
};

export default ExitToWeb;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
