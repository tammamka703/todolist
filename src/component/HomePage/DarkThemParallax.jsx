import React from 'react'
import { Parallax,ParallaxLayer } from '@react-spring/parallax'
import Parallaxbg from "../../Assests/images/Darkthembg (1).jpg"
import ParallaxMoon from "../../Assests/images/Darkthembg (2).png"
import ParallaxCloud from "../../Assests/images/Lightthembg (2).png"
function ParallaxHeader() {
  return (
    <Parallax pages={2}>
        <ParallaxLayer
         factor={2}
         className='Parallax-header-bg'
         >
            <img src={Parallaxbg}/>
        </ParallaxLayer>
        <ParallaxLayer
         factor={1}
          offset={0.5}
          speed={0.5}
         className='Parallax-header-item1'
         >
            <img src={ParallaxMoon}/>
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
            <h1>It is Night agin and you propably did not achive enough!!!???</h1>
            <h3>You for sure need a time managment Palne.</h3>
        </ParallaxLayer>
    </Parallax>
  )
}

export default ParallaxHeader
