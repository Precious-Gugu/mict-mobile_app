import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import EnquiryScreen from "./EnquiryScreen";
import Profile from "./Profile";
import NotificationsScreen from "./NotificationsScreen";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NotificationStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
    style={{ backgroundColor: "tomato" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#cb5c0d",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Menu"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Options",
        tabBarColor: "#cb5c0d",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-add" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#cb5c0d",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Notifications"
      component={NotificationStackScreen}
      options={{
        tabBarLabel: "Notifications",
        tabBarColor: "#cb5c0d",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#cb5c0d",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Quick Actions",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#cb5c0d"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="About Us"
      component={DetailsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#f4511e"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#f4511e"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const NotificationStackScreen = ({ navigation }) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <NotificationStack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#f4511e"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </NotificationStack.Navigator>
);