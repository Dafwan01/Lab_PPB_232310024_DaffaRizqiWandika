import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export const Search = () => {
  return (
    <View style={styles.s}>
        <FontAwesome5 name={"search"} size={20} color={"grey"}/> 
        <TextInput placeholder="Search"/>
    </View>
  )
}

const styles=StyleSheet.create({
    s:{
        padding:10,
        borderRadius:10,
        borderColor:"gray",
        borderWidth:1,
        backgroundColor:"white",
        flexDirection:"row",
    },
    a:{
        fontSize:18,
        width:"90%",
        
    }
})
