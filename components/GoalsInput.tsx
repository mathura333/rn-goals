import React from 'react';
import { useState } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

interface IGoalsInput {
  addGoal: (goal: string) => void;
}

const GoalsInput: React.FC<IGoalsInput> = ({ addGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const handleSubmit = () => {
    if (enteredGoal) {
      addGoal(enteredGoal);
      setEnteredGoal('');
    }
  };

  return (
    <View style={styles.goalsInput}>
      <TextInput
        placeholder="Your Goal"
        onChangeText={setEnteredGoal}
        value={enteredGoal}
        style={styles.textInput}
      />
      <Button color="#5bb7d9" title="Add" onPress={handleSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  goalsInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    width: '80%',
  },
});
export default GoalsInput;
