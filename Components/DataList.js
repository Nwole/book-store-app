import { StyleSheet, Image, Text, View } from "react-native";
import React from "react";

const DataList = ({ item }) => {
  return (
    <View style={{ width: "100%", height: 70 }}>
      <View style={styles.bookcontainer}>
        <Image source={{ uri: item.imgUrl }} style={styles.bookImage} />
        <View style={styles.titleAuthorCont}>
        <Text style={styles.bookTitle}>{item?.title}</Text>
        <Text style={styles.bookTitle}>{item?.author}</Text>
        </View>

      </View>
    </View>
  );
};

export default DataList;

const styles = StyleSheet.create({
  bookcontainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  bookTitle: {
    // margin: 0,
    marginLeft: 20,
    padding: 10,
    fontWeight: "bold",
    borderRadius: 15,
  },
  bookImage: {
marginBottom: 20,
    width: 50,
    height: 70,
  },
//   bookTitleAuth:{
//     fontSize: 18,
//   },
  titleAuthorCont:{

  }
});
