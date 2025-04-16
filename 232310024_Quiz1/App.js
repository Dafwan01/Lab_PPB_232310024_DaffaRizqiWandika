import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfRFC from './Src/Components/ProfRFC';
import ProfRCC from './Src/Components/ProfRCC';
import Form from './Src/Components/Form';
import ColorChange from './Src/Components/ColorChange';

export default function App() {
  return (
    <View style={styles.container}>
       <Form/>
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
