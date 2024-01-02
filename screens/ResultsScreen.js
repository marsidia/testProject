import { FlatList, StyleSheet, Text, View } from "react-native";
import { useFetchProductsQuery } from "../store";
import SearchItem from "../components/SearchItem";

function ResultsScreen() {
  const { data, error, isFetching } = useFetchProductsQuery("disjoncteur");
  let content;
  if (isFetching) {
    content = (
      <View>
        <Text>fetching</Text>
      </View>
    );
  } else if (error) {
    content = (
      <View>
        <Text>Error</Text>
      </View>
    );
  } else {
    content = (
      <FlatList
        data={data}
        renderItem={(itemData) => {
          return <SearchItem />;
        }}
      />
    );
  }

  return <View style={styles.container}>{content}</View>;
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

export default ResultsScreen;
