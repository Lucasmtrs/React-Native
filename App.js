import { StyleSheet, View } from 'react-native';
import Title from './src/components/title/titlecomponent';
import Form from './src/components/Form/formcomponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});
