import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Feather, Entypo } from "@expo/vector-icons";

const Header = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Chats");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    navigation.navigate(option);
  };
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
      <View style={styles.options}>
        <Pressable
          style={({ pressed }) => [
            styles.selector,
            selectedOption === "Chats" && {
              backgroundColor: pressed ? "#3578C1" : "#3578C1",
            },
          ]}
          onPress={() => handleOptionChange("Chats")}
        >
          <Text
            style={[
              styles.selectorText,
              selectedOption === "Chats" && { color: "white" },
            ]}
          >
            Chats
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.selector,
            selectedOption === "Groups" && {
              backgroundColor: pressed ? "#3578C1" : "#3578C1",
            },
          ]}
          onPress={() => handleOptionChange("Groups")}
        >
          <Text
            style={[
              styles.selectorText,
              selectedOption === "Groups" && { color: "white" },
            ]}
          >
            Groups
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.selector,
            selectedOption === "Status" && {
              backgroundColor: pressed ? "#3578C1" : "#3578C1",
            },
          ]}
          onPress={() => handleOptionChange("Status")}
        >
          <Text
            style={[
              styles.selectorText,
              selectedOption === "Status" && { color: "white" },
            ]}
          >
            Status
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
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
  options: {
    width: "94%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginTop: 8,
  },
  selector: {
    width: "32%",
    height: "100%",
    borderWidth: 0.3,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  selectorText: {
    color: "#3578C1",
    fontSize: 16,
  },
});

export default Header;
