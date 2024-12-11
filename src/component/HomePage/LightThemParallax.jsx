import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'

// <=================?pics/====================>
import Parallaxbackground from "../../Assests/images/Lightthembg (1).jpg"
import ParallaxSun from "../../Assests/images/Lightthembg (1).png"
import ParallaxCloud from "../../Assests/images/Lightthembg (2).png"
function LightThemParallax() {
  return (
    <Parallax pages={2}>
        <ParallaxLayer
         factor={2}
         className='Parallax-header-bg'
         >
            <img src={Parallaxbackground}/>
        </ParallaxLayer>
        <ParallaxLayer
         factor={1}
          offset={0.5}
          speed={0.5}
         className='Parallax-header-item1'
         >
            <img src={ParallaxSun}/>
        </ParallaxLayer>
        <ParallaxLayer
         factor={1}
          offset={0.5}
          speed={1.4}
         className='Parallax-header-item2'
         >
            <img src={ParallaxCloud}/>
        </ParallaxLayer>
        <ParallaxLayer
         factor={1}
          offset={0.5}
          speed={1}
         className='Parallax-header-item3'
         >
            <img src={ParallaxCloud}/>
        </ParallaxLayer>
        <ParallaxLayer
          factor={0}
          offset={1}
          speed={1}
         className='Parallax-header-item4'
         >
            <h1>It is A new day good morning sunshine !!!</h1>
            <h3>It is time to Rise Up and achive Goals .</h3>
        </ParallaxLayer>
    </Parallax>
  )
}

export default LightThemParallax
