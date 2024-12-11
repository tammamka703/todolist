import React from 'react'
import NavBar from '../component/header/NavBar'
import SideBar from '../component/header/SideBar'
import { useState,useEffect } from 'react'

function Header({HundelMode,mode}) {
    // responsive design
    const [screenwidth , setScreenWidth] = useState(window.innerWidth)
    console.log(screenwidth)
    const handelWidth = () =>{
        setScreenWidth(()=>{
            return window.innerWidth
        })
    }
    useEffect(()=>{
        window.addEventListener("resize",handelWidth);
        return ()=>{
            window.removeEventListener("resize",handelWidth);
        }
    },[screenwidth]) 
        // changing nav bar height and color
const[scrollpos,setScrollpos] = useState(0)
const handelScroll = () =>{
    setScrollpos(()=>{
        return window.scrollY
    })
}
useEffect(()=>{
    window.addEventListener("scroll",handelScroll);
    return ()=>{
        window.removeEventListener("scroll",handelScroll);
    }
},[scrollpos]) 

    // open and close side bar 
 const[sideBarState , toggleSideBar ] = useState(false);

 const changeSideBarState = ()=>{
     toggleSideBar(prevState => !prevState);
 }
  return (
    <main className='header'>
        <NavBar
         changeSideBarState={changeSideBarState}
         scrollpos={scrollpos}
         sideBarState={sideBarState}
         screenwidth={screenwidth}
         HundelMode={HundelMode}
         mode={mode}
        />

        {screenwidth < 750 &&  
        <SideBar
          scrollpos={scrollpos}
          screenwidth={screenwidth}
          sideBarState={sideBarState}
          HundelMode={HundelMode}
          mode={mode}
        />}
{/* <========================/Paralax Effect/====================> */}
        <div className='header-content'>
        </div>
    </main>
  )
}

export default Header
