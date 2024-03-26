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
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

const Chat = ({ route }) => {
  const { chatData } = route.params;
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.navigate("Chats");
  };
  const name = "Moin Khan";
  const messages = [
    { text: "Hello!", sender: true },
    { text: "Hi there!", sender: false },
    { text: "How are you?", sender: true },
    {
      text: "I'm good, thank you.I'm good, thank you.I'm good, thank you.",
      sender: false,
    },
    { text: "How are you?", sender: false },
    {
      text: "I'm good, thank you.I'm good, thank you.I'm good, thank you.",
      sender: true,
    },
  ];
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

        <ScrollView style={styles.chatMessages}>
          {messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                message.sender ? styles.senderMessage : styles.receiverMessage,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  { color: message.sender ? "#3578C1" : "white" },
                ]}
              >
                {message.text}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.chatInput}>
          <View style={{ width: "8%" }}>
            <Ionicons name="add-sharp" size={30} color="white" />
          </View>
          <View style={{ width: "58%" }}>
            <TextInput
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
            <Ionicons name="send" size={24} color="white" />
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
  chatMessages: {
    flex: 1,
    paddingHorizontal: 10,
  },
  messageContainer: {
    maxWidth: "60%",
    marginVertical: 5,
    padding: 8,
  },
  senderMessage: {
    alignSelf: "flex-end",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  receiverMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#62abfc",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  messageText: {
    fontSize: 16,
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
