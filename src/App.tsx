import './App.css'
import {motion} from 'framer-motion'
import FramerAnimation from './Framer-Animation'

function App() {

  return (
    <>
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


    </>
  )
}

export default App
