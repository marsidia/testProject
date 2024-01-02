import { StyleSheet, Text, View } from "react-native";
import { useGetPricesQuery } from "../store";

function Prices({ itemId }) {
  const { data, error, isFetching } = useGetPricesQuery(itemId);
  let content;
  if (isFetching) {
    content = "...";
  } else if (error) {
    content = "indisponible";
  } else {
    content = data.price_ht;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content} € HT / Unité</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "Inter-Medium",
    color: "#1D2939",
  },
});

export default Prices;
