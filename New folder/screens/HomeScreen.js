import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image, _ScrollView } from "react-native";
import Explore from '../components/explore'
import Info from '../components/info'
import Enquiry from '../components/Enquiry'
import ExitToWeb from '../components/ExitToWeb'

const EnquiryScreen = () => {
  return (
    <View style={styles.container}>
 

<ScrollView scrollEventThrottle={16} >
  <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}} >
    <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
      How can we assist you?
    </Text>
    <View style={{height: 150, marginTop: 20}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Explore />
        <Info/>
        <Enquiry/>
        <ExitToWeb/>
      
      </ScrollView>

    </View>
    <View style={{ marginTop: 40, paddingHorizontal: 20}}>
      <Text style={{fontSize: 24, fontWeight:'700'}}>
        Introducing Metal-Casting made easy!
      </Text>
    </View>
   
  </View>

</ScrollView>

</View> 


  );
};
export default EnquiryScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",backgroundColor: 'white'

  },
    heading: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
});