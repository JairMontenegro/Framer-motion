import React from "react";

interface Props {
  srcset: string;
  src: string;
  alt: string;
  cardName: string;
}


const Card: React.FC<Props> = ({srcset, src, alt, cardName}) => {

  return (
    <div>
    <picture>
      <p>{cardName}</p>
      <source media="(max-width:375px)" srcSet={srcset}>
      <img src={src} alt={alt} />
      </source>
    </picture>
      
    </div>
  )
}

export default Card;
