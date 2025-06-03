import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Profile = (navigation) => {
    return (
        <View>
            <Text> Nama:Daffa Rizqi WAndika</Text>
            <Text> email:232310024@student.ibik.ac.id</Text>
            <Image source={{uri:'https://i0.wp.com/aksi.co/wp-content/uploads/2024/10/cartoon_gintama_19-1920x1200-1.jpg?resize=960%2C600&ssl=1'}} style={{width:300,height:200}}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;
