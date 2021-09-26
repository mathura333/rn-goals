import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import GoalCard from './components/GoalCard';
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
      <FlatList
        keyExtractor={({ id }) => id}
        data={goals}
        renderItem={(itemData) => (
          <GoalCard
            onDelete={() =>
              setGoals((prev) =>
                prev.filter(({ id }) => id !== itemData.item.id)
              )
            }>
            {itemData.item.goal}
          </GoalCard>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6e2ff',
    paddingTop: 45,
  },
  goalsInput: {
    paddingVertical: 10,
  },
});
