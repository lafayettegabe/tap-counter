import { StyleSheet, Text, Pressable, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <Pressable style={styles.pressable} onPress={() => setCount(count + 1)}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.text}>{count}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
});