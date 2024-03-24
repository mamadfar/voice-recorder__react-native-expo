
import { SafeAreaView, StyleSheet } from 'react-native';
import Recorder from './components/Recorder'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Recorder/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
