import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Search } from './widgets/Search';

export default class Friends extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Search/>
      </View>
      <View style={styles.body}>Friends</View>
      </SafeAreaView>
    )
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    },
    Header:{
        flex:1,
        justifyContent:"center",
        padding:15,
        backgroundColor:"red",
    },
    body:{
        flex:10,
        backgroundColor:"yellow",
    },


})
