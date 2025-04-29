import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Bio from './Components/Bio';
import User from './Data/User'; 
import SplashScreen from './Components/SplashScreen';
import Blueprint from './Components/Blueprint';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Blueprint />
      <SplashScreen /> */}
      <Bio user={User} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
