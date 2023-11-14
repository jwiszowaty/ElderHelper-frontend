import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TaskBoard from "./TaskBoard";
import ChatRoomNav from "./ChatRoomNav";
import Profile from "./Profile";
import JobsList from "./JobsList";
import PostJob from "./PostJob";

function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "relative",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#ffffff",
          // borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      {/* <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/Home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                {" "}
                Home{" "}
              </Text>
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Task Board"
        component={TaskBoard}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/Jobs.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                {" "}
                Task Board{" "}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/Profile.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                {" "}
                Profile{" "}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PostJob"
        component={PostJob}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/PostJob.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                Post Job
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatRoomNav"
        component={ChatRoomNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/Chat.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="JobsList"
        component={JobsList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/Chat.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                JobsList
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
  },
});
