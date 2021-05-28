import React, { useState } from 'react';
import { Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  isEnabled:boolean;
}

export function TodoInput({ addTask, isEnabled }: TodoInputProps) {
   const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task)
    setTask('')
  }

  return (
    <View style={[ isEnabled ? styles.inputContainerSwitch : styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={isEnabled ? styles.inputSwitch : styles.input} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={ isEnabled ? '#F5F4F8' : '#303030'}
        returnKeyType="send"
        onSubmitEditing={handleAddNewTask}
        value={task}
        selectionColor={isEnabled ? '#F5F4F8' : '#303030'}
        onChangeText={(item) => setTask(item)}
        //TODO - use value, onChangeText and onSubmitEditing props
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={ isEnabled ? styles.addButtonSwitch : styles.addButton}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerSwitch: {
    backgroundColor: '#303030',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color:'#303030' ,
  },
  inputSwitch: {
    flex: 1,
    backgroundColor: '#303030',
    color: '#FFF',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonSwitch: {
    backgroundColor: '#181818',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});