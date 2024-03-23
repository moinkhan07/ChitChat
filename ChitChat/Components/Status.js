import { View, Text, StyleSheet } from "react-native";
import React from 'react'

const Status = () => {
  return (
    <View style={styles.statusView}>
      <Text>Status</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statusView: {
    height: "100%",
    backgroundColor: "#3578C1",
  },
});

export default Status