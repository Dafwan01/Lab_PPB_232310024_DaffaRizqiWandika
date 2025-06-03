import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const List = () => {
    const[list,setlist]=useState([
        {
            id:1,
            nama:'daffa',
            npm:232310024,
        },
        {
            id:2,
            nama:'fadil',
            npm:232310023,
        },
        {
            id:3,
            nama:'prabowo',
            npm:232310090,
        },
        {
            id:4,
            nama:'jokowi',
            npm:232310017,
        },
        {
            id:5,
            nama:'gibran',
            npm:232310081,
        }

    ])
    return (
        <View>
            <FlatList 
            data={list} 
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={{gap:5,marginBottom:20,borderWidth:2}}>
                  <Text>Nama:{item.nama}</Text>
                  <Text>NPM:{item.npm}</Text>
                </View>
              )}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default List;
