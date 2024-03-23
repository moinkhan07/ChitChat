import { StyleSheet, Text, View } from "react-native";
// import Register from "./Components/Register";
// import Login from "./Components/Login";
import Main from "./Components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
