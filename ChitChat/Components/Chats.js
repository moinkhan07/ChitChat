import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Chats = () => {
  const navigation = useNavigation();
  const handleChatPress = (chatData) => {
    navigation.navigate("Chat", { chatData });
  };
  const chatsData = [
    {
      id: 1,
      name: "Self",
      message: "1.Java 2.Python 3.Kotlin 4.React Native",
      time: "7:24 PM",
      imageUri:
        "https://avatars.githubusercontent.com/u/99876741?s=400&u=85779b613746610d52f094672a66566f37aca024&v=4",
    },
    {
      id: 2,
      name: "Vivek Bhai",
      message: "Kya haal hai bhai bahut din ho gaye mile kab mil rahe ho",
      time: "9:10 AM",
      imageUri:
        "https://media.licdn.com/dms/image/D4D03AQF0YM9bwQTYaA/profile-displayphoto-shrink_100_100/0/1705560710420?e=1717027200&v=beta&t=6kjxGwhcMEafMKcoq-MWZ1inalKviO9Wu--zPBY_Omk",
    },
    {
      id: 3,
      name: "Sharukh Bhai",
      message: "Send me all the java and mysql notes",
      time: "11:24 AM",
      imageUri:
        "https://media.licdn.com/dms/image/D4E03AQE9Sm6S6vGnpg/profile-displayphoto-shrink_800_800/0/1676718733901?e=1717027200&v=beta&t=5oQYSqtRAp4j1DUILczmHgiFBcvumB0GjkR0h3JwI80",
    },
    {
      id: 4,
      name: "Tanveer Bhai",
      message: "Let's meet today at 8 pm at bandra fort",
      time: "4:12 PM",
      imageUri:
        "https://yt3.googleusercontent.com/ytc/AIdro_ll_IlWekYk3O3DT4-3oo-6QQnPneV9jQxOmrz56g=s176-c-k-c0x00ffffff-no-rj",
    },
  ];

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
            {item.name.substring(0, 15)}
          </Text>
          <Text style={{ color: "#E5E4E2", fontSize: 12 }}>
            {item.message.substring(0, 40) + "..."}
          </Text>
        </View>
        <View style={styles.chatTime}>
          <Text style={{ color: "#E5E4E2", fontSize: 11 }}>{item.time}</Text>
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
