import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function ProfRFC() {
  return (
    <View style={styles.container}> 
    <Text>Nama: Daffa Rizqi Wandika</Text>
    <Text>NPM: 232310024</Text>
    <Text>Jurusan: Teknologi Informasi</Text>
    <Text>Hobi: Main</Text>
    </View>
  )
}
    const styles = StyleSheet.create({
        container:{
            justifyContent: 'center'
        },
    })