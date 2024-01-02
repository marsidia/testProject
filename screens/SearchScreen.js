import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Image } from "react-native";
import ResultsBar from "../components/ResultsBar";
import SearchBar from "../components/SearchBar";
import InputScreen from "./InputScreen";
import ResultsScreen from "./ResultsScreen";
const Stack = createNativeStackNavigator();

function SearchScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({ route }) => ({
          headerShown: true,
          title: "Rechercher",
          headerStyle: {},

          headerTitle: () => <SearchBar navigation={navigation} />,
        })}
        name="Input"
        component={InputScreen}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerShown: true,
          headerTitle: () => <ResultsBar title={route.params.title} />,
          headerRight: () => (
            <Image
              source={require("../assets/menu.png")}
              style={{ height: 15, width: 15 }}
            />
          ),
          headerStyle: {},
        })}
        name="Results"
        component={ResultsScreen}
      />
    </Stack.Navigator>
  );
}

export default SearchScreen;
