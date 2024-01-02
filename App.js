import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BaseComponent from "./screens/BaseComponent";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return <Image source={require("./assets/home.png")} />;
              } else if (route.name === "Agencies") {
                return <Image source={require("./assets/agencies.png")} />;
              } else if (route.name === "Search") {
                <Image source={require("./assets/search.png")} />;
              } else if (route.name === "Basket") {
                <Image source={require("./assets/basket.png")} />;
              } else if (route.name === "Account") {
                <Image source={require("./assets/account.png")} />;
              }
            },
            tabBarActiveTintColor: "#000000",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            options={{
              headerShown: true,
              title: "Accueil",
              headerStyle: {},
            }}
            name="Home"
            component={BaseComponent}
          />
          <Tab.Screen
            options={{
              headerShown: true,
              title: "Agences",
              headerStyle: {},
            }}
            name="Agencies"
            component={BaseComponent}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              title: "Rechercher",
              headerStyle: {},
            }}
            name="Search"
            component={SearchScreen}
          />
          <Tab.Screen
            options={{
              headerShown: true,
              title: "Mon panier",
              headerStyle: {},
            }}
            name="Basket"
            component={BaseComponent}
          />
          <Tab.Screen
            options={{
              headerShown: true,
              title: "Mon compte",
              headerStyle: {},
            }}
            name="Account"
            component={BaseComponent}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
