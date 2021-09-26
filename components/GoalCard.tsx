import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface IGoalCard {
  children: React.FC | string;
  onDelete: () => void;
}

const GoalCard: React.FC<IGoalCard> = ({ children, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onDelete}>
      <View style={styles.goal}>
        <Text style={styles.goalText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goal: {
    flex: 1,
    width: '90%',
    backgroundColor: '#5bb7d9',
    padding: 20,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  goalText: {
    fontSize: 20,
    fontWeight: '200',
  },
});

export default GoalCard;
