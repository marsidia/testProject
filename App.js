import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BaseComponent from "./screens/BaseComponent";
import { useFonts } from "expo-font";
import { useCallback } from "react";
const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return (
                  <Image
                    source={require("./assets/home.png")}
                    style={{ height: 30, width: 30 }}
                  />
                );
              } else if (route.name === "Agencies") {
                return (
                  <Image
                    source={require("./assets/agencies.png")}
                    style={{ height: 30, width: 30 }}
                  />
                );
              } else if (route.name === "Search") {
                return (
                  <Image
                    source={require("./assets/search.png")}
                    style={{ height: 30, width: 30 }}
                  />
                );
              } else if (route.name === "Basket") {
                return (
                  <Image
                    source={require("./assets/basket.png")}
                    style={{ height: 30, width: 30 }}
                  />
                );
              } else if (route.name === "Account") {
                return (
                  <Image
                    source={require("./assets/account.png")}
                    style={{ height: 30, width: 30 }}
                  />
                );
              }
            },
            tabBarActiveTintColor: "#b66464",
            tabBarInactiveTintColor: "#1D2939",
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
