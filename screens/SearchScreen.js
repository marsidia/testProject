import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import InputScreen from "./InputScreen";
import ResultsScreen from "./ResultsScreen";
const Stack = createNativeStackNavigator();

function SearchScreen({ navigation }) {
  const onSubmit = (value) => {
    navigation.navigate("Results", { product: value });
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Rechercher",
          headerStyle: {},
          headerTitle: (props) => <SearchBar {...props} />,
        }}
        name="Input"
        component={InputScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          title: "Rechercher",
          headerStyle: {},
        }}
        name="Results"
        component={ResultsScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
});

export default SearchScreen;
