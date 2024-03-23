import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Feather, Entypo } from "@expo/vector-icons";
import Chats from "./Chats";
import Groups from "./Groups";
import Status from "./Status";
import Options from "./Options";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const Main = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.mainHeader}>
        <View>
          <Text style={{ color: "#E5E4E2" }}>Hello,</Text>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            Moin
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
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <Options {...props} />}
          screenOptions={{ swipeEnabled: false }}
        >
          <Tab.Screen name="Chats" component={Chats} />
          <Tab.Screen name="Groups" component={Groups} />
          <Tab.Screen name="Status" component={Status} />
        </Tab.Navigator>
      </NavigationContainer>
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
