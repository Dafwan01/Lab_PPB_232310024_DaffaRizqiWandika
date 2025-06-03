import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Pendaftaran = () => {
    const[n,setn]=useState('')
    const[e,sete]=useState('')
    const[hp,sethp]=useState('')
    return (
        <View style={{gap:20}}>
            <View>
            <Text>Nama lengkap</Text>
            <TextInput placeholder='masukan nama'  onChange={(Text)=>setn(Text)} style={{borderWidth:2}}/>
            </View>

            <View>
            <Text>Email</Text>
            <TextInput placeholder='masukan email'   onChange={(Text)=>sete(Text)}  style={{borderWidth:2}}/>
            </View>

            <View>
            <Text>NOmor hp</Text>
            <TextInput placeholder='masukan nomor hp'   onChange={(Text)=>sethp(Text)}  style={{borderWidth:2}}/>
            </View>

            <Button title='Simpan' onPress={()=>{ if(n==''&&e==''&&hp==''){
                alert('kosong')
            }else{
                alert('selamat datang ',{n})
            }}}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Pendaftaran;
