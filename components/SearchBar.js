import { useState } from "react";
import { StyleSheet,  TextInput, View } from "react-native";

function SearchBar({ navigation }) {
  const [currentProduct, setCurrentProduct] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Que recherchez-vous ?"
        onChangeText={setCurrentProduct}
        value={currentProduct}
        onSubmitEditing={() =>
          navigation.navigate("Results", { product: currentProduct })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {},
});

export default SearchBar;
