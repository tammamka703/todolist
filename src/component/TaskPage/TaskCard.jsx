import React, { useState , useContext} from 'react'
import { ThemeContext } from '../../context/ThemContext'


function TaskCard({task,markTaskAsCompleted,changeDeadLine}) {
const mode = useContext(ThemeContext)
// open the deadline form
const [deadlinepopupState ,setdeadlinepopupState] = useState(false)
  function HundleDeadlinePopup() {
  setdeadlinepopupState((prevState)=>!prevState)
 }  
 // =============================================================================>
 //  changes
 function hundelDeadlineForm(e){
  e.preventDefault()
  setdeadlinepopupState(false)
  changeDeadLine(task.id,e.target.children[1].value)
 }
 function humdelmarkasComplet(){
  markTaskAsCompleted(task.id)
 }
  return (
    <div className={mode === "Dark"?'task-card dark':"task-card"}>
      <div className='task-card-header'>
            <div className='task-card-title'>
              <h1>
                  {task.title}
              </h1>
            </div>
            <div className='task-card-dates'>
                  <span className='create-date'>
                    {task.currentDate}
                  </span>
                  <span className='deadline'>
                    {task.deadline}
                  </span>
            </div>
      </div>
      <div className='task-card-discription'>
        <article>
            {task.discription}
          
        </article>
      </div>
      <div className='task-card-footer'>
              <button className='task-completed' onClick={humdelmarkasComplet}>
                {task.IsCompleted === true ?  "Return to the list":"Mark As Combleted"}
              </button>
              <button className='change-deadline' onClick={HundleDeadlinePopup}>
                Reset Deadline
              </button>
      </div>
      {deadlinepopupState && 
      <div className='Deadline-popup'>
        <button className='exit-deadline-popup' onClick={HundleDeadlinePopup}>
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
        </button>
          <div className='DeadLine-overlay'/>
          <form onSubmit={hundelDeadlineForm} >
              <label htmlFor='ChangeDeadline'>
                Set The New DeadLine
              </label>
              <input name='ChangeDeadline' type='date'/>
              <button type='submit'>Change</button>
          </form>
      </div>
        }
    </div>
  )
}

export default TaskCard
