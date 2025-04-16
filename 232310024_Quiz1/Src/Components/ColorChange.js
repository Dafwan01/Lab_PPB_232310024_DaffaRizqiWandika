import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default function ColorChange() {
  const [col, setcol] = useState('red')

  return (
    <View style={styles.container}>
      <Button title="ubah" onPress={() => setcol('blue')} />
      <View style={[styles.box, { backgroundColor: col }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
})
