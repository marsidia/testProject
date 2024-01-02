import { useState } from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";

function SearchBar({ navigation }) {
  const [currentProduct, setCurrentProduct] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/search2.png")}
        style={{ height: 15, width: 15 }}
      />
      <TextInput
        style={styles.text}
        placeholder="Que recherchez-vous ?"
        placeholderTextColor={"#667085"}
        onChangeText={setCurrentProduct}
        value={currentProduct}
        onSubmitEditing={() =>
          navigation.navigate("Results", { title: currentProduct })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    width: "90%",
  },
});

export default SearchBar;
