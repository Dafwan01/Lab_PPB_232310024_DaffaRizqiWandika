import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Counterapp = () => {
    const[a,seta]=useState(0)    
    return (
        <View style={{gap:10}}>
            <Text style={styles.t}>{a}</Text>
            <View style={{flex:1, flexDirection:'row',gap:10}}> 
                <Button title='+' onPress={()=> {if(a<10){
            seta(a+1)
        }else{
            alert('penuh')
        }}}/>
                <Button title='-' onPress={()=> seta(a-1)}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    t:{
        fontSize:50,
    }
})

export default Counterapp;
