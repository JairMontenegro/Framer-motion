import './App.css'
import {motion} from 'framer-motion'
import FramerAnimation from './Framer-Animation'
import DragObject from './Draggable-objects'
import HoverOrClick from './Hover-or-click'
import ScrollAnimation from './Scroll-animation'
import ScrollAnimationTrigger from './Scroll-animation-trigger'


function App() {

  return (
    <>
        <ScrollAnimation/>
        <motion.h1
        initial={{x: -1000}}
        animate={{x: [0 ,900, 0]}}
        transition={{
          duration:3,
          delay: 0.2,
        }}
        whileHover={{
          scale: 0.9,
          opacity: 0.2

        }}

        >This is a header that i will animate</motion.h1>
        <FramerAnimation/>
        <DragObject/>
        <HoverOrClick/>
        <ScrollAnimationTrigger/>

       
        


    </>
  )
}

export default App
