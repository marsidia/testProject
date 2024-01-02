import { StyleSheet, Text, View, Image } from "react-native";
import Prices from "./Prices";
import Stocks from "./Stocks";

function SearchItem({ item }) {
  return (
    item && (
      <View style={styles.container}>
        <Image
          source={{ uri: item.image_url }}
          style={{ width: 135, height: 112, objectFit: "cover" }}
        />
        <View style={styles.details}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.brandText}>{item.brand.name}</Text>
          <View style={styles.codeDetails}>
            <Text style={styles.codeTitle}>Code article : </Text>
            <Text style={styles.codeNumber}>{item.code_product}</Text>
          </View>

          <Stocks itemId={item.id} />
          <Prices itemId={item.id} />
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F4F7",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginVertical: 5,
    gap: 16,
  },
  nameText: {
    color: "#475467",
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
  },
  brandText: {
    color: "#1D2939",
    fontFamily: "Inter-Regular",
    fontSize: 11,
    textTransform: "uppercase",
  },
  details: {
    flexBasis: "50%",
  },
  codeDetails: {
    flexDirection: "row",
  },
  codeTitle: {
    fontFamily: "Inter-Regular",
    fontSize: 11,
    color: "#1D2939",
  },

  codeNumber: {
    fontFamily: "Inter-Regular",
    fontSize: 11,
    color: "#667085",
  },
});

export default SearchItem;
