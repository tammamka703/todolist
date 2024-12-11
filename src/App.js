import React, { useState } from 'react';
import Header from './component/header';
import HomeLayout from './scencs/HomeLayout';
import TaskPageLayout from './scencs/TaskPageLayout';
import AccountLayout from "./scencs/AccountLayout" 
import Footer from './component/Footer';
import { userContext } from './context/UserContext';
import {UserData} from './Data/UserData';
import {Route,Routes} from 'react-router-dom';


import "./component/header/header.css"
import "./component/HomePage/homestyle.css"
import ToDoList from './component/TaskPage/ToDoList';
import CreatTask from './component/TaskPage/CreateTask';
import CompletedTask from './component/TaskPage/CompletedTask';
import ThemContextprovidor from './context/ThemContext';
import TaskContextProvider from './context/TaskContext';
function App() {
  const[mode , setMode] = useState("Light")
  function HundelMode (){
    setMode((prevMode)=>{
      return prevMode === "Light"? "Dark":"Light";
    })
  }
  return (
    
    <div className="App">
      <ThemContextprovidor mode={mode}>

      <userContext.Provider value={UserData}>
        <Header
        HundelMode={HundelMode}
        mode={mode}
        />
      <TaskContextProvider>
          <Routes>
            <Route path='/' element={<HomeLayout mode={mode}/>}/>
            <Route path='/account' element={<AccountLayout/>}/>
              <Route path='/mytasks' element={<TaskPageLayout/>}>
                <Route index  element={<ToDoList/>}/>
                <Route path='creattask' element={<CreatTask/>}/>
                <Route path='completedtasks' element={<CompletedTask/>}/>
              </Route>
          </Routes>
      </TaskContextProvider>
        <Footer/>
      </userContext.Provider>
      </ThemContextprovidor>
    </div>
  );
}

export default App;
