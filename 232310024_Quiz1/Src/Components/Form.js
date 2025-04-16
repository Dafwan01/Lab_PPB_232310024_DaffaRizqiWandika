import React, { useState } from 'react'
import { Button, TextInput, View, Text, StyleSheet, Alert } from 'react-native'

export default function Form() {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [telp, setTelp] = useState('')

  return (
    <View style={styles.container}>
      <View>
        <Text>Masukan Nama</Text>
        <TextInput
          placeholder="masukan nama"
          style={styles.input}
          onChangeText={text => setNama(text)}/>
      </View>

      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="masukan email"
          style={styles.input}
          onChangeText={text => setEmail(text)}/>
      </View>

      <View>
        <Text>No Telpon</Text>
        <TextInput
          placeholder="masukan no telepon"
          style={styles.input}
          onChangeText={text => setTelp(text)}/>
      </View>
      <Button title='Submit' onPress={() => {Alert.alert('Hasil', `Nama: ${nama}\nEmail: ${email}\nNo Telp: ${telp}`);}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
}) 