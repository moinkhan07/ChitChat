import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Status = () => {
  return (
    <View style={styles.statusView}>
      <Text style={{ color: "white", fontSize: 25 }}>Coming Soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusView: {
    height: "100%",
    backgroundColor: "#3578C1",
    paddingTop: 250,
    alignItems: "center",
  },
});

export default Status;
