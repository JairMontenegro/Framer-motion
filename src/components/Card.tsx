import React from "react";
import {motion} from "framer-motion"


interface Props {
  srcset: string;
  src: string;
  alt: string;
  cardName: string;
}

const Card: React.FC<Props> = ({ srcset, src , alt, cardName }) => {
  return (
    <motion.div className="card"
    whileHover={{
      scale:1.2,
      transition:{duration: .3},
      
    }}
    >
      <picture>
      <p>{cardName}</p>
        <source media="(max-width: 375px)" srcSet={srcset}/>
        <img src={src} alt={alt} />
      </picture>
    </motion.div>
  );
};

export default Card;
