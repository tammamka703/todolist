import React from 'react'
import { createContext, useState } from "react";
import {useLocalStorage} from "../useLocalStorage"


export const TasksContext = createContext();


function TaskContextProvider({children}) {
    const{updateitems, getitems} = useLocalStorage("tasks")
    const tasksfromlocalstorage = JSON.parse(getitems())
    const [CurrentTasks ,updateTasks] = useState(tasksfromlocalstorage)
    

  function addTask(title,discription,deadline){
    let currentDate = `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    const newtaskarray = CurrentTasks ? [...CurrentTasks ,{
      id:CurrentTasks.length + 1,
      title:title,
      discription:discription,
      deadline:deadline,
      currentDate:currentDate,
      IsCompleted:false
  }]:[{
    id:1,
    title:title,
    discription:discription,
    deadline:deadline,
    currentDate:currentDate,
    IsCompleted:false
}]
    updateTasks(()=>{return newtaskarray})
    updateitems(JSON.stringify(newtaskarray))
}


  

    // the function that wll apply the changes on the tasks cards

    const markTaskAsCompleted = function (id){
      const newTasksArray = CurrentTasks.map((task)=>{
        if(task.id === id){
          return {...task , IsCompleted : !task.IsCompleted}
        }else{
          return task
        }
    })
    updateitems(JSON.stringify(newTasksArray))
    updateTasks(newTasksArray)
    }
    const changeDeadLine = function (id ,newdeadline){
      const newTasksArray = CurrentTasks.map((task)=>{
          if(task.id === id){
            return {...task , deadline : newdeadline}
          }else{
            return task
          }
      })
      updateitems(JSON.stringify(newTasksArray))
      updateTasks(newTasksArray)
    }

  return (
    <TasksContext.Provider value={{CurrentTasks,markTaskAsCompleted,changeDeadLine,addTask}}>
        {children}
    </TasksContext.Provider>
  )
}

export default TaskContextProvider