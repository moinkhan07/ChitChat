import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Chats = () => {
  const navigation = useNavigation();
  const handleChatPress = () => {
    navigation.navigate("Chat");
  };
  const name = "Moin Khan";
  const message = "Kya haal hai bhai bahut din ho gaye mile kab mil rahe ho";
  return (
    <ScrollView style={styles.chatsView}>
      <Pressable
        onPress={handleChatPress}
        style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
      >
        <View style={styles.chat}>
          <View style={styles.chatDp}>
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/99876741?s=400&u=85779b613746610d52f094672a66566f37aca024&v=4",
              }}
              style={{
                width: "80%",
                height: "80%",
                borderRadius: 50,
              }}
            />
          </View>
          <View style={styles.chatName}>
            <Text
              style={{
                color: "white",
                fontSize: 17,
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
    width: "22%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chatName: {
    width: "55%",
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
