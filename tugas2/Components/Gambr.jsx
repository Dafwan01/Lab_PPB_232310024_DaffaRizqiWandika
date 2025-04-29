import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default function Gambr() {
  return (
    <View>
      <Image 
        source={{ uri: 'https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png' }} 
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
