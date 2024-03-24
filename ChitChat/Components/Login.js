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

const Login = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Main");
  };
  const handleNavigateToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={styles.loginMain}>
      <Image style={styles.logo} source={require("../assets/icon.png")} />
      <View style={styles.loginInputsView}>
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Email"}
          style={styles.loginTextInput}
          selectionColor={"white"}
        />
        <TextInput
          placeholderTextColor={"white"}
          placeholder={"Password"}
          style={styles.loginTextInput}
          selectionColor={"white"}
        />
        <Pressable
          style={({ pressed }) => [
            styles.loginPressable,
            { opacity: pressed ? 0.8 : 1 },
          ]}
          onPress={handleLogin}
        >
          <View style={styles.loginBtn}>
            <Text style={{ fontSize: 18, color: "#3578C1" }}>Login</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? 0.8 : 1, width: "100%" },
          ]}
          onPress={handleNavigateToRegister}
        >
          <Text
            style={{ color: "#E5E4E2", textAlign: "center", marginTop: 20 }}
          >
            Don't have an account? Register Now.
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginMain: {
    flex: 1,
    alignItems: "center",
    paddingTop: 130,
    backgroundColor: "#3578C1",
  },
  loginInputsView: {
    width: "90%",
  },
  loginTextInput: {
    width: "100%",
    height: 50,
    borderColor: "white",
    borderWidth: 0.3,
    marginVertical: 10,
    borderRadius: 15,
    paddingLeft: 10,
    color: "white",
  },
  loginPressable: {
    width: "100%",
    height: 50,
    marginTop: 40,
  },
  loginBtn: {
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
