import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Groups = () => {
  return (
    <View style={styles.groupsView}>
      <Text>Groups</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupsView: {
    height: "100%",
    backgroundColor: "#3578C1",
  },
});

export default Groups;
