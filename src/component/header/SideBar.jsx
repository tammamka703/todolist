import React, { useMemo, useState } from 'react'
import { useUserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
function SideBar(props) {
  const [dropdownopen , setdeopdownopen] = useState(false)
  function hundelDropDown(){
    setdeopdownopen(prevState => !prevState)
  }
  // side bar deop down 
  const User = useUserContext()
  const sidebarheightmanagment = useMemo(()=>{
    let sidebarhight = window.innerHeight - 60;
    return sidebarhight
  },[props.scrollpos])
  
  return (
    <div className={props.sideBarState === true ? "side-bar active":"side-bar"}
    style={props.scrollpos > 80 ? {top:60,height:sidebarheightmanagment}:{height:window.innerHeight - 80}}
    >
      <div className='sidebar-user-info'>
          <ul>
            <li>
                 <img  src={User.img}/>
            </li>
            <li>
                  <h1>
                      {
                        User.name
                      }
                  </h1>
            </li>
          </ul>
      </div>
      <div className='sidebar-links'>
          <ul>
              <li className='sidebar-links-item'>
                  <Link to="/">Home</Link>
              </li>
              <li className='sidebar-links-item'>
                  <div className="sidebar-drop-down">
                      <button onClick={hundelDropDown}>Tasks</button>
                      <div className={dropdownopen ?"sidebar-drop-down-content active" : "sidebar-drop-down-content"}>
                          <ul>
                            <li>
                              <Link to="/mytasks">
                                My Tasks
                              </Link>
                            </li>
                            <li>
                              <Link to="/mytasks/creattask">
                                Create Task
                              </Link>
                            </li>
                            <li>
                              <Link to="/mytasks/completedtasks">
                                Completed
                              </Link>
                            </li>
                          </ul>
                      </div>
                  </div>
              </li>
              <li className='sidebar-links-item'>
                  <Link to="/account">Account</Link>
              </li>
              <li className='sidebar-links-item'>
                 <Link to="/setting">Setting</Link>
              </li>
              <li>
                  <button className="toggle-mode" onClick={props.HundelMode}>
                      {props.mode === "Dark"?
                          <svg><path d="M3,11.985A9.811,9.811,0,0,0,12.569,22a9.528,9.528,0,0,0,8.309-5.059,1,1,0,0,0-.947-1.477l-.11.008c-.131.01-.263.02-.4.02a7.811,7.811,0,0,1-7.569-8.015,8.378,8.378,0,0,1,1.016-4A1,1,0,0,0,11.923,2,9.855,9.855,0,0,0,3,11.985Zm7.343-7.652a10.382,10.382,0,0,0-.488,3.144A9.89,9.89,0,0,0,18.137,17.4,7.4,7.4,0,0,1,12.569,20,7.811,7.811,0,0,1,5,11.985,7.992,7.992,0,0,1,10.343,4.333Z"/></svg>:
                          
                          <svg viewBox="0 0 240 240" version="1.1" id="Layer_1">       
                                  <g>
                                  <path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16 C181.12,83.79,188.83,101,188.83,120c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16 c-19.01,0-36.21-7.7-48.67-20.16C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67 C83.79,58.88,101,51.17,120,51.17L120,51.17z M158.27,81.73c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85 c-9.79,9.79-15.85,23.32-15.85,38.27c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85 c14.95,0,28.48-6.06,38.27-15.85c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73L158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71 c-4.26,0-7.71-3.45-7.71-7.71V7.71L113.88,7.71z M170.87,19.72c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48 l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72L170.87,19.72z M214.19,58.57 c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8 c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57L214.19,58.57z M232.29,113.88c4.26,0,7.71,3.45,7.71,7.71 c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29L232.29,113.88z M220.28,170.87 c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19 L181.43,214.19z M126.12,232.29c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71 c4.26,0,7.71,3.45,7.71,7.71V232.29L126.12,232.29z M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48 l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28L69.13,220.28z M25.81,181.43 c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8 c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43L25.81,181.43z M7.71,126.12c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71 h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71L7.71,126.12z M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13L19.72,69.13z"/>
                                  </g>
                          </svg>}
                  </button>
              </li>
            </ul>
      </div>
      <div className='sidebar-controler'>
          <ul>
            <li className='sidebar-controler-item'>
               <a>Log Out</a>
            </li>
            <li  className='sidebar-controler-item'>
                  <a>Visite creator github </a>
            </li>
          </ul>
      </div>
      
    </div>
  )
}

export default SideBar
