import {motion, useScroll} from 'framer-motion';
import './Scroll-animation.css'


function ScrollAnimation() {
    const {scrollYProgress} = useScroll()

    return(
        <motion.div className='scroll'
        style={{
            scaleX: scrollYProgress
        }}
        >
        </motion.div>   
    )
}

export default ScrollAnimation;