import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Helloscree from './components/Helloscree';
import Counterapp from './components/Counterapp';
import Pendaftaran from './components/Pendaftaran';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './components/Profile';
import Home from './components/Home';
import List from './components/List';

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='Profile'component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    // <View style={styles.container}>
    //   {/* <List /> */}
    //   {/* <Pendaftaran /> */}
    //   {/* <Helloscree /> */}
    //   {/* <Counterapp /> */}
    // </View>
  )}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
