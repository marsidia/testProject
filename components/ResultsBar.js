import { StyleSheet, Text, View } from "react-native";

function ResultsBar({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter-SemiBold",
    color: "#1D2939",
    textAlign: "center",
    alignItems: "center",
  },
});

export default ResultsBar;
