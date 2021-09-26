import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import GoalsInput from './components/GoalsInput';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.goalsInput}>
        <GoalsInput/>
      </View>
      <Button title="Open up App.tsx to start working on your app!" onPress={()=>{}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6e2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalsInput:{
    padding:50
  }
});
