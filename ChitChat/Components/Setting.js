import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Setting = () => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.navigate("Chats");
  };
  return (
    <View style={styles.setting}>
      <View
        style={{
          width: "100%",
          height: 50,
          borderBottomColor: "white",
          borderBottomWidth: 0.3,
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: 5,
        }}
      >
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1, width: "10%" },
          ]}
          onPress={navigateBack}
        >
          <View style={{ width: "100%" }}>
            <AntDesign name="left" size={33} color="white" />
          </View>
        </Pressable>
        <Text style={{ color: "white" }}>Back</Text>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 25,
        }}
      >
        Setting Component
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    alignItems: "center",
    paddingTop: 35,
    backgroundColor: "#3578C1",
  },
});

export default Setting;
