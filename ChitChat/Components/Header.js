import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Alert,
  ActivityIndicator,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import {
  Feather,
  Entypo,
  AntDesign,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";

const Header = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Chats");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [addUserRequest, setAddUserRequest] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    navigation.navigate(option);
  };

  const handleSyncIconPress = () => {
    setShowLoadingModal(true);
    setTimeout(() => {
      setShowLoadingModal(false);
    }, 3000);
  };

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  const userAddRequest = () => {
    if (addUserRequest) {
      Alert.alert("Request Sended Already!");
    }
    setAddUserRequest(true);
  };

  const dropdownOptions = [
    { label: "Profile", action: () => Alert.alert("Go to Profile") },
    {
      label: "Security & Privacy",
      action: () => Alert.alert("Privacy Settings"),
    },
    { label: "Logout", action: () => Alert.alert("Logout") },
  ];
  return (
    <View style={styles.mainView}>
      <View style={styles.mainHeader}>
        <View>
          <Text style={{ color: "#E5E4E2" }}>Hello,</Text>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            MoinKhan07
          </Text>
        </View>
        <View style={styles.iconsView}>
          <Pressable
            onPress={handleSyncIconPress}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          >
            <View style={styles.icons}>
              <AntDesign name="sync" size={22} color="#E5E4E2" />
            </View>
          </Pressable>
          <Pressable
            onPress={() => setShowDropdown(true)}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          >
            <View style={styles.icons}>
              <Entypo name="dots-three-vertical" size={22} color="#E5E4E2" />
            </View>
          </Pressable>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showLoadingModal}
        onRequestClose={() => setShowLoadingModal(false)}
      >
        <View style={styles.loadingModal}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </Modal>

      {/* Dropdown menu */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showDropdown}
        onRequestClose={() => setShowDropdown(false)}
      >
        <Pressable
          style={styles.dropdownBackground}
          onPress={() => setShowDropdown(false)}
        >
          <View style={styles.dropdown}>
            {dropdownOptions.map((option, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  option.action();
                  setShowDropdown(false);
                }}
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.6 : 1,
                    borderBottomColor: "grey",
                    borderBottomWidth: 0.3,
                  },
                ]}
              >
                <Text style={styles.dropdownItem}>{option.label}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>

      {/* Search modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showSearchModal}
        onRequestClose={() => {}}
      >
        <Pressable
          style={styles.userSearchBackground}
          onPress={() => setShowSearchModal(false)}
        >
          <View style={styles.searchModalContainer}>
            <View style={styles.searchUserData}>
              <View style={styles.chatDp}>
                <Image
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/99876741?s=400&u=85779b613746610d52f094672a66566f37aca024&v=4",
                  }}
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
                    color: "#3578C1",
                    fontSize: 15,
                    fontWeight: "600",
                  }}
                >
                  @moinkhan07
                </Text>
              </View>

              <Pressable
                style={({ pressed }) => [
                  {
                    width: "22%",
                    height: "100%",
                    opacity: pressed ? 0.5 : 1,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
                onPress={userAddRequest}
              >
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  {addUserRequest ? (
                    <FontAwesome name="send" size={25} color="#3578C1" />
                  ) : (
                    <Ionicons name="person-add" size={25} color="#3578C1" />
                  )}
                </View>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>

      <View style={styles.searchContainer}>
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Search username"}
          style={styles.chatSearch}
          selectionColor={"white"}
        />
        <Pressable
          onPress={toggleSearchModal}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              justifyContent: "center",
            },
          ]}
        >
          <Feather
            name={showSearchModal ? "x" : "search"}
            size={25}
            color="#E5E4E2"
            style={styles.searchIcon}
          />
        </Pressable>
      </View>

      <View style={styles.options}>
        <Pressable
          style={({ pressed }) => [
            styles.selector,
            selectedOption === "Chats" && {
              backgroundColor: pressed ? "#3578C1" : "#3578C1",
            },
          ]}
          onPress={() => handleOptionChange("Chats")}
        >
          <Text
            style={[
              styles.selectorText,
              selectedOption === "Chats" && { color: "white" },
            ]}
          >
            Chats
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.selector,
            selectedOption === "Groups" && {
              backgroundColor: pressed ? "#3578C1" : "#3578C1",
            },
          ]}
          onPress={() => handleOptionChange("Groups")}
        >
          <Text
            style={[
              styles.selectorText,
              selectedOption === "Groups" && { color: "white" },
            ]}
          >
            Groups
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.selector,
            selectedOption === "Status" && {
              backgroundColor: pressed ? "#3578C1" : "#3578C1",
            },
          ]}
          onPress={() => handleOptionChange("Status")}
        >
          <Text
            style={[
              styles.selectorText,
              selectedOption === "Status" && { color: "white" },
            ]}
          >
            Status
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    paddingTop: 35,
    backgroundColor: "#3578C1",
  },
  mainHeader: {
    width: "94%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    width: 42,
    height: 42,
    borderColor: "#E5E4E2",
    borderRadius: "50%",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  iconsView: {
    width: "27%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  options: {
    width: "94%",
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginTop: 8,
  },
  selector: {
    width: "32%",
    height: "100%",
    borderWidth: 0.3,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  selectorText: {
    color: "#3578C1",
    fontSize: 16,
  },
  chatSearch: {
    width: "94%",
    height: 45,
    borderColor: "white",
    borderWidth: 0.3,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 50,
    color: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    right: 15,
  },
  dropdownBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingTop: 100,
    alignItems: "center",
  },
  dropdown: {
    backgroundColor: "white",
    width: "94%",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "#3578C1",
    textAlign: "center",
  },
  loadingModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  userSearchBackground: {
    flex: 1,
    paddingTop: 155,
    alignItems: "center",
  },
  searchModalContainer: {
    backgroundColor: "#E5E4E2",
    width: "94%",
    borderRadius: 5,
  },
  searchUserData: {
    width: "100%",
    height: 60,
    borderBottomColor: "#E5E4E2",
    borderBottomWidth: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  chatDp: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  chatName: {
    width: "70%",
    height: "100%",
    justifyContent: "center",
  },
});

export default Header;
