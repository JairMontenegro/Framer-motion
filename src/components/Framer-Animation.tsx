import '../css/Framer-Animation.css'
import {motion, AnimatePresence } from 'framer-motion';
import {useState} from 'react';

function FramerAnimation() {
    const [show, setShow] = useState(true)
    return(
        <div className='container'>
            <h1>Animations: Exit and enter animation</h1>

            <AnimatePresence>
                {
                    show && <motion.div
                    style={{width: "100px", height:"100px", background:"blue"}}
                    initial={{opacity: 0, x :50}}
                    animate={{opacity:1, x: 250}}
                    exit={{opacity :0, x: -250}}
                    transition={{duration:1}}
                    >
                    </motion.div>
                }
            </AnimatePresence>
            <button onClick={()=>  setShow(!show)}>{show? "Remove": "Add Box"}</button>
        </div>
    )

}

export default FramerAnimation; 