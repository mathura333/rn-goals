import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import GoalsInput from './components/GoalsInput';

export default function App() {
  const [goals, setGoals] = useState<{id:number,goal:string}[]>([])
  return (
    <View style={styles.container}>
      <View style={styles.goalsInput}>
        <GoalsInput addGoal={(goal:string)=>setGoals(prev=>[...prev,{id:prev.length,goal}])}/>
      </View>
      <View style={styles.goals}>
      {goals.map(({id,goal})=><View key={id} style={styles.goal}><Text style={styles.goalText}>{goal}</Text></View>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6e2ff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  goalsInput:{
    padding:10
  },
  goal:{
    width:'90%',
    backgroundColor:'#5bb7d9',
    padding:20,
    margin:10,
    justifyContent:"center",
    alignItems:'center'
  },
  goals:{
    justifyContent:"center",
    alignItems:'center'
  },
  goalText:{
    fontSize:20,
    fontWeight:"200",
  }
});
