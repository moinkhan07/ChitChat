import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../firebaseConfig";

const Chats = () => {
  const navigation = useNavigation();
  const handleChatPress = (chatData) => {
    navigation.navigate("Chat", { chatData });
  };
  const [chatsData, setChatsData] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const firestore = firebase.firestore();
    const auth = firebase.auth();
    const currentUserUid = auth.currentUser.uid;

    try {
      const querySnapshot = await firestore
        .collection("users")
        .where("userId", "!=", currentUserUid)
        .get();

      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setChatsData(users);
    } catch (error) {
      Alert.alert("Error fetching users:", error);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => handleChatPress(item)}
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }]}
    >
      <View style={styles.chat}>
        <View style={styles.chatDp}>
          <Image
            source={{ uri: item.imageUri }}
            style={{
              width: "70%",
              height: "70%",
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
            {item.name.substring(0, 15)}
          </Text>
          <Text style={{ color: "#E5E4E2", fontSize: 12 }}>
            {"Last message implementation pending".substring(0, 40) + "..."}
          </Text>
        </View>
        <View style={styles.chatTime}>
          <Text style={{ color: "#E5E4E2", fontSize: 11 }}>00:00</Text>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.chatsView}>
      <FlatList
        data={chatsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatsView: {
    height: "100%",
    backgroundColor: "#3578C1",
  },
  chat: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#E5E4E2",
    borderBottomWidth: 0.3,
    borderRadius: 10,
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
