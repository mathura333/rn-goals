import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import GoalsInput from './components/GoalsInput';

export default function App() {
  const [goals, setGoals] = useState<{ id: string; goal: string }[]>([]);
  return (
    <View style={styles.container}>
      <View style={styles.goalsInput}>
        <GoalsInput
          addGoal={(goal: string) =>
            setGoals((prev) => [...prev, { id: `${prev.length}`, goal }])
          }
        />
      </View>
      <FlatList keyExtractor={({id})=>id} data={goals} renderItem={(itemData) => (
          <View style={styles.goal}>
            <Text style={styles.goalText}>{itemData.item.goal}</Text>
          </View>
        )} style={styles.goals}/>
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
    paddingTop:45
  },
  goalsInput: {
    padding: 10,
  },
  goal: {
    width: '90%',
    backgroundColor: '#5bb7d9',
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goals: {
    width:"100%",
  },
  goalText: {
    fontSize: 20,
    fontWeight: '200',
  },
});
