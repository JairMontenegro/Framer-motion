import React from "react";

interface Props {
  srcset: string;
  src: string;
  alt: string;
  cardName: string;
}

const Card: React.FC<Props> = ({ srcset, src, alt, cardName }) => {
  return (
    <div>
      <p>{cardName}</p>
      <picture>
        <source media="(max-width: 375px)" srcSet={srcset} />
        <img src={src} alt={alt} />
      </picture>
    </div>
  );
};

export default Card;
