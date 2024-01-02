import { StyleSheet, Text, View } from "react-native";
import { useGetStocksQuery } from "../store";

function Stocks({ itemId }) {
  const { data, error, isFetching } = useGetStocksQuery(itemId);
  let content;
  if (isFetching) {
    content = "...";
  } else if (error) {
    content = "indisponible";
  } else {
    content = data.stock.reduce((acc, curr) => acc + curr.stock, 0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.indicator}></View>
      <Text style={styles.text}>{content} en stock </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    fontFamily: "Inter-Medium",
    fontSize: 12,
    color: "#667085",
  },
  indicator: {
    backgroundColor: "#57c73b",
    height: 10,
    width: 10,
    borderRadius: 50,
  },
});

export default Stocks;
