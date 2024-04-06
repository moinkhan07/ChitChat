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
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Feather,
  Entypo,
  AntDesign,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { firebase } from "../firebaseConfig";

const Header = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Chats");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [userRequests, setUserRequests] = useState(
    dummyUserData?.map(() => false) ?? []
  );
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setLoggedInUser(snapshot.data());
        } else {
          Alert.alert("User does not exist!");
        }
      });
  }, []);

  const dummyUserData = [
    {
      id: 1,
      name: "moinkhan07",
      imageUri:
        "https://avatars.githubusercontent.com/u/99876741?s=400&u=85779b613746610d52f094672a66566f37aca024&v=4",
    },
    {
      id: 2,
      name: "vrajak",
      imageUri:
        "https://media.licdn.com/dms/image/D4D03AQF0YM9bwQTYaA/profile-displayphoto-shrink_100_100/0/1705560710420?e=1717027200&v=beta&t=6kjxGwhcMEafMKcoq-MWZ1inalKviO9Wu--zPBY_Omk",
    },
    {
      id: 3,
      name: "sharukh007",
      imageUri:
        "https://media.licdn.com/dms/image/D4E03AQE9Sm6S6vGnpg/profile-displayphoto-shrink_800_800/0/1676718733901?e=1717027200&v=beta&t=5oQYSqtRAp4j1DUILczmHgiFBcvumB0GjkR0h3JwI80",
    },
    {
      id: 4,
      name: "trq",
      imageUri:
        "https://yt3.googleusercontent.com/ytc/AIdro_ll_IlWekYk3O3DT4-3oo-6QQnPneV9jQxOmrz56g=s176-c-k-c0x00ffffff-no-rj",
    },
  ];

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

  const searchUser = (username) => {
    return dummyUserData.find(
      (user) => user.name.toLowerCase() === username.toLowerCase()
    );
  };

  const handleSearch = () => {
    const username = searchText.toLowerCase();
    const foundUser = searchUser(username);
    setSearchResult(foundUser ? [foundUser] : []);
    toggleSearchModal();
  };

  const toggleUserRequest = (index) => {
    if (userRequests[index]) {
      Alert.alert(
        "Withdraw Request",
        "Are you sure you want to withdraw the request?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Yes",
            onPress: () => {
              setUserRequests((prevState) => {
                const updatedRequests = [...prevState];
                updatedRequests[index] = false;
                return updatedRequests;
              });
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      setUserRequests((prevState) => {
        const updatedRequests = [...prevState];
        updatedRequests[index] = true;
        return updatedRequests;
      });
    }
  };

  const renderSearchUser = ({ item, index }) => {
    return (
      <View style={styles.searchUserData}>
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
              color: "#3578C1",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            {"@" + item.name.substring(0, 15)}
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
          onPress={() => toggleUserRequest(index)}
        >
          <View
            style={{
              width: "100%",
            }}
          >
            {userRequests[index] ? (
              <FontAwesome name="send" size={25} color="#3578C1" />
            ) : (
              <Ionicons name="person-add" size={25} color="#3578C1" />
            )}
          </View>
        </Pressable>
      </View>
    );
  };

  const dropdownOptions = [
    { label: "Profile", action: () => navigation.navigate("Profile") },
    {
      label: "Connection Requests",
      action: () => navigation.navigate("Connections"),
    },
    {
      label: "Security & Privacy",
      action: () => navigation.navigate("Setting"),
    },
    { label: "Logout", action: () => firebase.auth().signOut() },
  ];
  return (
    <View style={styles.mainView}>
      <View style={styles.mainHeader}>
        <View>
          <Text style={{ color: "#E5E4E2" }}>Hello,</Text>
          <Text style={{ color: "white", fontSize: 25, fontWeight: "600" }}>
            {loggedInUser ? loggedInUser.name : "Guest"}
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
            {searchResult.length === 0 && searchText !== "" ? (
              <Text style={styles.errorMessage}>No user found</Text>
            ) : (
              <FlatList
                data={searchResult}
                renderItem={renderSearchUser}
                keyExtractor={(item) => item.id.toString()}
              />
            )}
          </View>
        </Pressable>
      </Modal>

      <View style={styles.searchContainer}>
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Search username"}
          style={styles.chatSearch}
          selectionColor={"white"}
          value={searchText}
          onChangeText={setSearchText}
        />
        <Pressable
          onPress={searchText ? handleSearch : undefined}
          disabled={!searchText}
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
    maxHeight: 400,
    borderRadius: 5,
  },
  searchUserData: {
    width: "100%",
    height: 60,
    borderBottomColor: "grey",
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
  errorMessage: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 15,
  },
});

export default Header;
