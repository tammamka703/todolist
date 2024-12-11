import React, { useContext } from 'react'
import { TasksContext } from '../../context/TaskContext'
import TaskCard from './TaskCard';
import { ThemeContext } from '../../context/ThemContext';
function ToDoList() {
  const theme = useContext(ThemeContext)
  const tasks = useContext(TasksContext)
  // <========================/the default for tasks/=================>
    const TasksList = tasks.CurrentTasks? tasks.CurrentTasks.map(item => {
      if(item.IsCompleted === false){
        return(
             <li key={item.id}>
                 <TaskCard
                  key={item.id}
                   task = {item}
                   updateTasks = {tasks.updateTasks}
                   changeDeadLine = {tasks.changeDeadLine}
                   markTaskAsCompleted = {tasks.markTaskAsCompleted}
                  />
             </li>
         )   
      }else{
        return undefined
      }
    }):[];
    
    function isArrayEmpty(array){
      let isEmpty = true
      array.forEach(element => {
        if(element !== undefined){isEmpty = false }
      })
      return isEmpty
    }

  return (
    <>
    <div className={theme === "Dark"?'task-page-header dark':"task-page-header"}>
        <div className='header-contnent'>
            <h1>Set Tasks And show Commetment</h1>
        </div>
    </div>
    <div className={theme === "Dark"?'task-container dark':'task-container'}>
        {isArrayEmpty(TasksList)?
                <div className={theme === "Dark"?'no-task-yet dark':'no-task-yet'}>
                    <h1>
                        You don't have any tasks yet !!!
                    </h1>
                </div>
                :
                <ul>
                    {TasksList}
                </ul>
        }
    </div>
        </>
  )
}

export default ToDoList
