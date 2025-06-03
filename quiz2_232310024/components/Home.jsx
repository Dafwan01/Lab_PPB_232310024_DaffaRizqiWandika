import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View>
            <Button title='lihat profile' onPress={()=> navigation.navigate('Profile')}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
