import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const GoalsInput = () => {
  return (
    <>
      <TextInput placeholder="Your Goal" style={styles.textInput}/>
    </>
  );
}
const styles = StyleSheet.create({
  textInput:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    padding:10
  }
})
export default GoalsInput;
