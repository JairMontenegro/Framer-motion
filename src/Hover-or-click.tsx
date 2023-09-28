import './Hover-or-click.css'
import { useState } from 'react' 
import{motion} from 'framer-motion'



function HoverOrClick () { 

    const [isOpen, setOpen] = useState(false)

    return (
        <div className='container-hover-click'> 
        <h1>Hover Or Click Animation</h1> 

            <motion.div className="hover_click" whileHover={{
                scale : 1.1}}
                transition={{
                    layout: {
                        duration:1,
                        type:"spring"

                    }
                }}
                layout onClick={()=> setOpen(!isOpen)}
                >
                <motion.h2>hover or click
                    {isOpen && (
                        <motion.p className='click'
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a non, voluptates quas distinctio nihil! A ducimus reprehenderit doloremque tempora distinctio beatae? Ratione incidunt iste minus reprehenderit excepturi adipisci laboriosam!
                        </motion.p>
                    )}
                </motion.h2>
            </motion.div>  
        
        </div>
    )
}

export default HoverOrClick;