import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import Chats from "./Chats";
import Groups from "./Groups";
import Status from "./Status";
import Options from "./Options";
import Chat from "./Chat";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

const ListOfChats = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Chats" component={Chats} />
    <Stack.Screen name="Chat" component={Chat} />
  </Stack.Navigator>
);

const Main = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.mainHeader}>
        <View>
          <Text style={{ color: "#E5E4E2" }}>Hello,</Text>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            MoinKhan07
          </Text>
        </View>
        <View style={styles.iconsView}>
          <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
            <View style={styles.icons}>
              <Feather name="search" size={22} color="#E5E4E2" />
            </View>
          </Pressable>
          <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
            <View style={styles.icons}>
              <Entypo name="dots-three-vertical" size={22} color="#E5E4E2" />
            </View>
          </Pressable>
        </View>
      </View>
      <Tab.Navigator
        tabBar={(props) => <Options {...props} />}
        screenOptions={{ swipeEnabled: false }}
      >
        <Tab.Screen name="ListOfChats" component={ListOfChats} />
        <Tab.Screen name="Groups" component={Groups} />
        <Tab.Screen name="Status" component={Status} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    paddingTop: 35,
    backgroundColor: "#3578C1",
  },
  mainHeader: {
    width: "94%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    width: 42,
    height: 42,
    borderColor: "#E5E4E2",
    borderRadius: "50%",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  iconsView: {
    width: "27%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Main;
