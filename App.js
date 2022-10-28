import React, { useEffect, useState } from "react";

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import axios from "axios";
import DataList from "./Components/DataList";
export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await axios.get(
          "https://fudap-books-api.herokuapp.com/books/"
        );
        setData(booksData.data);
        setLoading(false);
        console.log("Data", booksData.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchBooks();
  }, [isLoading]);
  return (
    <View style={{ flex: 1, padding: 24, rowGap: 20 }}>
      <Text style={{marginBottom: 20}}>Hello</Text>
      {isLoading ? (
        <ActivityIndicator testID="loading" accessibilityLabel="App is loading books" style={{color: 'red'}} />
      ) : (
        <FlatList
        accessibilityLabel="books"
        contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <DataList item={item} testID="book" />}
        />
       
      )}
    </View>
  );
}
