import React from "react";
import { View, Text, StyleSheet, Image, } from "react-native";

const Enquiry = () => {
  return (
    <View style={{height: 300, maxWidth: '100%', marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd'}}>
          <View style={{flex: 2}}>
            <Image source={require('C:\mobile\assets\MCTS.jpg')} style={{flex:1, width: null, height: null, resizeMode: 'cover'}}/>
          </View>
          <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
            <Text style={{fontWeight: '400', fontSize: 22}}>
                Explore Our New Services
            </Text>
          </View>
          
        </View>
);
};

export default Enquiry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
