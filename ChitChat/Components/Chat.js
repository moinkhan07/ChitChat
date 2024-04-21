import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { getRoomId } from "../utils/common";
import { firebase } from "../firebaseConfig";
import MessageList from "./MessageList";

const Chat = ({ route }) => {
  const { chatData } = route.params;

  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.navigate("Chats");
  };

  const [messages, setMessages] = useState([]);
  const textRef = useRef("");
  const inputRef = useRef(null);

  useEffect(() => {
    createRoomIfNotExists();
    let roomId = getRoomId(firebase.auth().currentUser.uid, chatData.userId);
    const db = firebase.firestore();
    const docRef = db.collection("rooms").doc(roomId);
    const messageRef = docRef.collection("messages");
    const q = messageRef.orderBy("createdAt", "asc");

    const unSub = q.onSnapshot((snapshot) => {
      let allMessages = snapshot.docs.map((doc) => {
        return doc.data();
      });
      setMessages([...allMessages]);
    });

    return unSub;
  }, []);

  const createRoomIfNotExists = async () => {
    let roomId = getRoomId(firebase.auth().currentUser.uid, chatData.userId);
    const db = firebase.firestore();
    const roomsRef = db.collection("rooms");
    await roomsRef.doc(roomId).set({
      roomId,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    });
  };

  const handleSendMessage = async () => {
    let message = textRef.current.trim();
    if (!message) return;
    try {
      const roomId = getRoomId(
        firebase.auth().currentUser.uid,
        chatData.userId
      );
      const db = firebase.firestore();
      const docRef = db.collection("rooms").doc(roomId);
      const messageRef = docRef.collection("messages");
      textRef.current = "";
      if (inputRef) inputRef?.current?.clear();
      const newDoc = await messageRef.add({
        userId: firebase.auth().currentUser.uid,
        text: message,
        createdAt: firebase.firestore.Timestamp.now(),
      });
    } catch (error) {
      Alert.alert("Message", error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? -25 : 0}
    >
      <View style={styles.chatView}>
        <View style={styles.chatTop}>
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
          <View style={styles.chatDp}>
            <Image
              source={{ uri: chatData.imageUri }}
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
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              {chatData.name.substring(0, 12)}
            </Text>
            <Text style={{ color: "#E5E4E2", fontSize: 10 }}>online</Text>
          </View>
          <View
            style={{
              width: "22%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Feather name="video" size={26} color="white" />
            <Ionicons name="call-outline" size={26} color="white" />
          </View>
        </View>

        <MessageList messages={messages} />

        <View style={styles.chatInput}>
          <View style={{ width: "8%" }}>
            <Ionicons name="add-sharp" size={30} color="white" />
          </View>
          <View style={{ width: "58%" }}>
            <TextInput
              ref={inputRef}
              onChangeText={(value) => (textRef.current = value)}
              style={styles.inputMessage}
              placeholderTextColor="white"
              selectionColor={"white"}
              placeholder="Type message..."
            />
          </View>
          <View
            style={{
              width: "30%",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Feather name="camera" size={24} color="white" />
            <Feather name="mic" size={24} color="white" />
            <Pressable
              onPress={handleSendMessage}
              style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
            >
              <Ionicons name="send" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  chatView: {
    height: "100%",
    backgroundColor: "#3578C1",
    paddingTop: 35,
    paddingBottom: 25,
  },
  chatTop: {
    width: "100%",
    height: 65,
    borderBottomColor: "#E5E4E2",
    borderBottomWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  chatInput: {
    width: "100%",
    height: 55,
    borderTopColor: "#E5E4E2",
    borderTopWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  chatDp: {
    width: "18%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chatName: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
  },
  inputMessage: {
    borderColor: "#E5E4E2",
    borderWidth: 0.3,
    width: "100%",
    height: 38,
    borderRadius: 20,
    color: "white",
    paddingHorizontal: 10,
  },
});

export default Chat;
