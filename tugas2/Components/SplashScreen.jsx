import { View, Text, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={{backgroundColor:'purple', width:'100%',height:'100%',justifyContent: 'center',
        alignItems: 'center'}}>
         <Image 
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/LOGO_IBIK.png/1200px-LOGO_IBIK.png' }} 
                style={{  width: 100,height: 100,}}
              />
    <Text style={{color:'white', marginTop:200}}> Loading</Text>
    </View>
  )
}

export default SplashScreen