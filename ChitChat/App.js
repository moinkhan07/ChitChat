import { StyleSheet, View } from "react-native";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Chats from "./Components/Chats";
import Chat from "./Components/Chat";
import Groups from "./Components/Groups";
import Status from "./Components/Status";
import Profile from "./Components/Profile";
import Connections from "./Components/Connections";
import Setting from "./Components/Setting";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MainTabScreen() {
  return (
    <Tab.Navigator tabBar={(props) => <Header {...props} />}>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Status" component={Status} />
    </Tab.Navigator>
  );
}

function MainStackSreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Connections"
        component={Connections}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="MainStackScreen" component={MainStackSreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
