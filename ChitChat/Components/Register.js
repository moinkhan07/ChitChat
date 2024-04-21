import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();
  const [registerCredentials, setRegisterCredentials] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    imageUri: "https://cdn-icons-png.flaticon.com/512/666/666201.png",
  });

  const handleRegister = async () => {
    const { name, username, email, password, confirmpassword, imageUri } =
      registerCredentials;

    // Checking if any field is empty
    if (!name || !username || !email || !password || !confirmpassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Check if the email is in correct format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    // Check if the password and confirm password match
    if (password !== confirmpassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    // Check if the password meets the strength criteria
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      Alert.alert(
        "Error",
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    const lowerCaseUsername = username.toLowerCase();
    const lowerCaseEmail = email.toLowerCase();

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .set({
              userId: firebase.auth().currentUser.uid,
              name,
              username: lowerCaseUsername,
              email: lowerCaseEmail,
              imageUri,
            });
        });
    } catch (error) {
      Alert.alert("Error", "Failed to register. Please try again.");
    }
  };
  const handleNavigateToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.registerMain}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <View style={styles.registerInputsView}>
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Full Name"}
          style={styles.registerTextInput}
          selectionColor={"white"}
          onChangeText={(text) =>
            setRegisterCredentials({ ...registerCredentials, name: text })
          }
        />
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"UserName"}
          style={styles.registerTextInput}
          selectionColor={"white"}
          onChangeText={(text) =>
            setRegisterCredentials({ ...registerCredentials, username: text })
          }
        />
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Email"}
          style={styles.registerTextInput}
          selectionColor={"white"}
          onChangeText={(text) =>
            setRegisterCredentials({ ...registerCredentials, email: text })
          }
        />
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Password"}
          style={styles.registerTextInput}
          selectionColor={"white"}
          onChangeText={(text) =>
            setRegisterCredentials({ ...registerCredentials, password: text })
          }
        />
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Confirm Password"}
          style={styles.registerTextInput}
          selectionColor={"white"}
          onChangeText={(text) =>
            setRegisterCredentials({
              ...registerCredentials,
              confirmpassword: text,
            })
          }
        />
        <Pressable
          style={({ pressed }) => [
            styles.registerPressable,
            { opacity: pressed ? 0.8 : 1 },
          ]}
          onPress={handleRegister}
        >
          <View style={styles.registerBtn}>
            <Text style={{ fontSize: 18, color: "#3578C1" }}>Register</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.8 : 1, width: "100%" },
          ]}
          onPress={handleNavigateToLogin}
        >
          <Text
            style={{ color: "#E5E4E2", textAlign: "center", marginTop: 20 }}
          >
            Already have an account? Login Now.
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  registerMain: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
    backgroundColor: "#3578C1",
  },
  registerInputsView: {
    width: "90%",
  },
  registerTextInput: {
    width: "100%",
    height: 50,
    borderColor: "white",
    borderWidth: 0.3,
    marginVertical: 4,
    borderRadius: 15,
    paddingLeft: 10,
    color: "white",
  },
  registerPressable: {
    width: "100%",
    height: 50,
    marginTop: 40,
  },
  registerBtn: {
    width: "100%",
    height: "100%",
    borderColor: "white",
    borderWidth: 0.3,
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E4E2",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    marginBottom: 40,
  },
});
