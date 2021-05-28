import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
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
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}