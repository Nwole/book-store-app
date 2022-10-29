import { StyleSheet, Image, Text, View, Touchable, TouchableOpacity } from "react-native";
import React from "react";

const DataList = ({ item }) => {
  return (
    <TouchableOpacity >
    <View style={{ width: "100%", height: 70 }}>
      <View style={styles.bookcontainer}>
        <Image source={{ uri: item.imgUrl }} style={styles.bookImage} />
        <View>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={{padding:10}}>{item.author}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default DataList;

const styles = StyleSheet.create({
  bookcontainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  bookTitle: {
    padding: 10,
    fontWeight: "bold",
  },
  bookImage: {
    marginBottom:20,
    width: 50,
    height: 70,
  },
  bookTitleAuth:{
    fontSize: 12,
  },
  
});
