import { StyleSheet, Text, View } from "react-native";

function SearchItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SearchItem</Text>
    </View>
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

export default SearchItem;
