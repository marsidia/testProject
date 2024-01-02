import { FlatList, StyleSheet, View } from "react-native";
import { useFetchProductsQuery } from "../store";
import SearchItem from "../components/SearchItem";
import { useState } from "react";

function ResultsScreen({ route }) {
  const [page, setPage] = useState(1);
  const { title } = route.params;
  const { data } = useFetchProductsQuery({
    page,
    title,
  });

  let content = (
    <FlatList
      contentContainerStyle={styles.content}
      onEndReachedThreshold={0.3}
      onEndReached={() => {
        setPage(page + 1);
      }}
      data={data ? data.results : []}
      renderItem={(itemData) => {
        return <SearchItem item={itemData.item} />;
      }}
    />
  );

  return <View style={styles.container}>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ResultsScreen;
