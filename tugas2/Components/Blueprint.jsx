import React, { Component } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Gambr from './Gambr';
import Tulisan from './Tulisan';

export default class Blueprint extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.borderb}>
            <Tulisan />
        </View>

        <View style={{ width: 100, height: 100,borderWidth:2 }}>
            <Gambr />
        </View>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  bordert: {
    borderWidth: 2,
    borderColor: 'red',
    width: '80%',
    padding: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    marginBottom: 10,
  },
  borderb: {
    borderWidth: 2,
    borderColor: 'black',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    height:200,
  },
});
