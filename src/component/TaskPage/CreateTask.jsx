import React,{useContext, useState} from 'react'
import {ThemeContext} from "../../context/ThemContext"
import { TasksContext } from '../../context/TaskContext'
function CreatTask() {
  const mode = useContext(ThemeContext)
  const taskContext = useContext(TasksContext)
  const [data , setData] = useState({
  title:"",
  date:"",
  text:""  
})
const [Validation , setValidation] =useState({
  titleExist : true,
  deadlineExist : true,
  discriptionExist:true
})

  function hundelformData (e){
    if(e.target.name === "tasktitle"){
        
        setData(
          (prevData)=>{return{...prevData , title : e.target.value}}
        )
    }
    else if(e.target.name === "taskdeadline"){
      
      setData(
        (prevData)=>{return{...prevData , date : e.target.value}}
      )
  }else if(e.target.name === "tasktext"){
    if(e.target.value === ""){
      Validation.discriptionExist = false
    }
    setData(
      (prevData)=>{return{...prevData , text : e.target.value}}
    )
  }
}
  function hundelcreatingTasks (e){
    e.preventDefault()
    if(data.title === ""){
      setValidation({...Validation,titleExist : false})
      return
    }else if(data.date === ""){
      setValidation({...Validation,deadlineExist : false})
      return
    }else if(data.text === ""){
      setValidation({...Validation,discriptionExist : false})
      return
    }else{
      taskContext.addTask(data.title,data.text,data.date)
      window.location="/mytasks"
    }
  }
  return (
    <>
    <div className={mode === "Dark"?'add-task dark':"add-task"}>
        <div className='header-contnent'>
            <h1>Set Tasks And show Commetment</h1>
        </div>
    </div>
    <div className={mode === "Dark"?'add-task dark':"add-task"}>
        <form className='form' onSubmit={hundelcreatingTasks}>
          <div className='container'>
            <div className='row g-3'>
              <div className='col-6'>
                <div className='form-item'>
                  <div className='row'>
                      <div className='col-12'>
                          <label htmlFor='tasktitle'>Task title</label>
                      </div>
                      <div className='col-12'>
                           <input type='text' name='tasktitle' onChange={hundelformData}/>      
                      </div>
                      {Validation.titleExist === false ?
                      <div className='col-12'>
                          <span>Task must have title!!!</span>
                      </div>:""
                      }
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='form-item'>
                  <div className='row'>
                      <div className='col-12'>
                          <label htmlFor='taskdadline'>Task Deadline</label>
                      </div>
                      <div className='col-12'>
                           <input type='date' name='taskdeadline' onChangeCapture={hundelformData}/>      
                      </div>
                      {Validation.deadlineExist === false ?
                      <div className='col-12'>
                          <span>Task must have Deadline!!!</span>
                      </div>:""
                      }
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='form-item'>
                  <div className='row'>
                      <div className='col-12'>
                          <label htmlFor='tasktext'>Task text</label>
                      </div>
                      <div className='col-12'>
                           <textarea type='text' name='tasktext' onChange={hundelformData}/>      
                      </div>
                      {Validation.discriptionExist === false ?
                      <div className='col-12'>
                          <span>Task must have Discription!!!</span>
                      </div>:""
                      }
                  </div>
                </div>
              </div>
               <div className='col-12'>
                  <div className='form-item'>
                     <input className='form-submit-btn' type='submit'/>      
                  </div>
              </div>
            </div>
          </div>
        </form>
    </div>
    </>
  )
}

export default CreatTask
