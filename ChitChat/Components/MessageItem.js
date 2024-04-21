import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { firebase } from "../firebaseConfig";

const MessageItem = ({ message }) => {
  if (firebase.auth().currentUser.uid == message.userId) {
    return (
      <View style={styles.myMessage}>
        <View style={styles.myMessageInner}>
          <View style={styles.individualMessage}>
            <Text>{message.text}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.receiverMessage}>
        <View style={styles.receiverInner}>
          <View style={styles.receiverIndividualMessage}>
            <Text style={{ color: "white" }}>{message.text}</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  myMessage: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 8,
    marginRight: 8,
  },
  myMessageInner: {
    width: "80%",
  },
  individualMessage: {
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  receiverMessage: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 8,
    marginLeft: 8,
  },
  receiverInner: {
    width: "80%",
  },
  receiverIndividualMessage: {
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#145eae",
  },
});

export default MessageItem;
