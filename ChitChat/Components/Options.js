import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";

const Options = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Chats");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    navigation.navigate(option);
  };
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default Options;
