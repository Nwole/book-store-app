import React, { useEffect, useState } from "react";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import axios from "axios";
import BookItem from "./BookItem";

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const itemSeparator = () => {
    return (
      <View
        style={{ height: 1, backgroundColor: "gray", marginVertical: 10 }}
      />
    );
  };

  const emptyList = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>No book found with the search term</Text>
      </View>
    );
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await axios.get(
          "https://fudap-books-api.herokuapp.com/books/"
        );
        setData(booksData.data);
        setDisplayData(booksData.data);
        setLoading(false);
        console.log("Data", booksData.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchBooks();
  }, [isLoading]);

  useEffect(() => {
    if (searchInput.trim() !== "") {
      const filteredData = displayData.filter((d) =>
        d.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      setDisplayData(filteredData);
    } else {
      setDisplayData(data);
    }
  }, [searchInput]);
  return (
    <View style={{ flex: 1, padding: 24, rowGap: 20 }}>
      <TextInput
        placeholder="search"
        style={style.searchInputContainer}
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
      />
      {isLoading ? (
        <ActivityIndicator
          testID="loading"
          accessibilityLabel="App is loading books"
          style={{ color: "red" }}
        />
      ) : (
        <FlatList
          accessibilityLabel="books"
          // contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
          ListEmptyComponent={emptyList}
          data={displayData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <BookItem item={item} navigation={navigation} testID="book"/>}
        />
      )}
    </View>
  );
}
const style = StyleSheet.create({
  searchInputContainer: {
    marginVertical: 10,
    height: 50,
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    marginHorizontal: 20,
  },
});
