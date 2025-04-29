import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Friends from './src/components/friends/Friends';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack =createNativeStackNavigator();
  return (
  <View>
    <Friends />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    justifyContent:'center',
 
  },

});
