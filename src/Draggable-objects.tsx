import './Draggable-objects.css'
import {motion} from 'framer-motion'




function DragObject () {
    return(
        <div className='container'>
            <h1>Draggable Object Animation</h1>

        <div className='drag-objects-container'>
            <div>
                <p>No constraint</p>
                <motion.div className="box" drag></motion.div>
            </div>
            <div>
                <p>Drag y only</p>
                <motion.div className="box blue" drag  = "y"></motion.div>
            </div>
            <div>
                <p>Drag x only</p>
                <motion.div className="box orange" drag ="x"></motion.div>
            </div>
            <div>
                <p>Drag Constraint</p><motion.div className="box red"
                drag 
                dragConstraints={{left:0, right:100 }}
                >
                </motion.div>
            </div>
        </div>

        </div>
    )
}

export default DragObject

