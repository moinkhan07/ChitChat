import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Login");
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
          placeholder={"UserName"}
          style={styles.registerTextInput}
          selectionColor={"white"}
        />
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Email"}
          style={styles.registerTextInput}
          selectionColor={"white"}
        />
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Password"}
          style={styles.registerTextInput}
          selectionColor={"white"}
        />
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Confirm Password"}
          style={styles.registerTextInput}
          selectionColor={"white"}
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
    marginVertical: 10,
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
