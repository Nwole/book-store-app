import { StyleSheet,Image, SafeAreaView, Text, View } from 'react-native'
import {AntDesign} from "@expo/vector-icons"
import React from 'react'

const DetailsScreen = ({ navigation, route }) => {
    const item = route.params.item
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
      <View style={{flexDirection:'row'}}>
          <AntDesign
          style={{}}
            name="arrowleft"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={{marginLeft:20}}>Back</Text>
        </View>
        <View style={{marginBottom: 20}}>
        <Image source={{uri:item.imgUrl}} style={styles.bookImage}/>
        <View  style={{marginTop: 10}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}> {item.title}</Text>
        <Text>About the book</Text>
        <Text>{item.description}</Text>
        </View>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        marginHorizontal:20
      },
    
      bookImage: {
        width: "100%",
        height: 300,
        resizeMode: 'contain'
        // height: 100,
      },
})