import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const Chats = () => {
  const name = "Sultan Osman Gazi";
  const message = "Kya haal hai bhai bahut din ho gaye mile kab mil rahe ho";
  return (
    <ScrollView style={styles.chatsView}>
      <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}>
        <View style={styles.chat}>
          <View style={styles.chatDp}>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/f4/1a/13/f41a13df2d4223576900d55a456093d4.jpg",
              }}
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "50%",
              }}
            />
          </View>
          <View style={styles.chatName}>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              {name.substring(0, 15)}
            </Text>
            <Text style={{ color: "#E5E4E2", fontSize: 12 }}>
              {message.substring(0, 40) + "..."}
            </Text>
          </View>
          <View style={styles.chatTime}>
            <Text style={{ color: "#E5E4E2", fontSize: 11 }}>19:24 PM</Text>
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chatsView: {
    height: "100%",
    backgroundColor: "#3578C1",
    paddingTop: 10,
  },
  chat: {
    width: "100%",
    height: 77,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#E5E4E2",
    borderWidth: 0.3,
    borderRadius: 8,
    marginBottom: 5,
  },
  chatDp: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chatName: {
    width: "56%",
    height: "100%",
    padding: 8,
  },
  chatTime: {
    width: "22%",
    height: "100%",
    alignItems: "center",
    paddingTop: 8,
    paddingRight: 5,
  },
});

export default Chats;
