import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemContext'
import { TasksContext } from '../../context/TaskContext'
import TaskCard from './TaskCard'
function CompletedTask() {
  const theme = useContext(ThemeContext)
  const tasks = useContext(TasksContext)
  // <========================/the default for tasks/=================>
    const CompletedTasks = tasks.CurrentTasks.map(item => {
      if(item.IsCompleted === true){
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
    })
    function isArrayEmpty(array){
      let isEmpty = true
      array.forEach(element => {
        if(element !== undefined){isEmpty = false }
      })
      return isEmpty
    }
  return (
    <>
    <div className={theme === "Dark"?'completed-task dark':"completed-task"}>
        <div className='header-contnent'>
            <h1>Completed Tasks</h1>
        </div>
    </div>
    
    <div className={theme === "Dark"?'task-container dark':'task-container'}>
        {isArrayEmpty(CompletedTasks)?
                <div className={theme === "Dark"?'no-task-yet dark':'no-task-yet'}>
                    <h1>
                        no COMPLETED tasks yet !!!
                    </h1>
                </div>
                :
                <ul>
                    {CompletedTasks}
                </ul>
        }
    </div>
        </>
  )
}

export default CompletedTask
