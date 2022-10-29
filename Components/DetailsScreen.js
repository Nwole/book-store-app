import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import {AntDesign} from "@expo/vector-icons"
import React from 'react'

const DetailsScreen = ({ navigation, route }) => {
    const item = route.params.item
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text>DetailScreen {item.title}</Text>
      <View style={styles.headerBtn}>
          <AntDesign
            name="arrowleft"
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
      },
      headerBtn: {
        width: 50,
        height: 50,
        // backgroundColor: COLORS.light,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
      },
})