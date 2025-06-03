import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Helloscree = () => {
    return (
        <View style={{alignItems:'center'}}>
            <Text>Hallo selamat datang di kuis react native </Text>
            <Image source={{uri:'https://i.pinimg.com/originals/be/b5/41/beb541eeb1ee06ba00ef55d5baa60773.gif'}} style={{width:400, height:200}} />
            <Button title='Mulai' onPress={()=> alert('Anda akan memulai kuis')}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Helloscree;
