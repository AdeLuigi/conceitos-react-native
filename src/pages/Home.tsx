import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {

    if (newTaskTitle != '') {
      setTasks([...tasks, {id:new Date().getTime(),title: newTaskTitle, done:false} ]);
    }

  }

  function handleMarkTaskAsDone(id: number) {
    const newTask = tasks.map((item, index) => {
      if (item.id == id) {
        return {id:item.id, title:item.title, done:!item.done}
      }
      return item
    })
    setTasks([...newTask])
  }

  function handleRemoveTask(id: number) {
    const filterTask = tasks.filter((item) => item.id != id )

    setTasks([...filterTask])
  }

  return (
    <>
      <Header setIsEnable={setIsEnabled} isEnabled={isEnabled} />

      <View style={{backgroundColor: isEnabled ? '#262626' : '#FFF' , flex:1}}>
      <TodoInput isEnabled={isEnabled} addTask={handleAddTask} />

      <MyTasksList
        isEnabled={isEnabled}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
      </View>
    </>
  )
}