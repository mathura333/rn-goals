import React from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

const GoalsInput = () => {
  return (
    <View style={styles.goalsInput}>
      <TextInput placeholder="Your Goal" style={styles.textInput}/>
      <Button title="Add" onPress={()=>{}}/>
    </View>
  );
}
const styles = StyleSheet.create({
  goalsInput:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  textInput:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    padding:10,
    marginRight:10,
    minWidth:200
  }
})
export default GoalsInput;
