import Card from "../components/Card";
import cardData from "../util/Cards-data.ts"
import "../css/Scroll-animation-trigger.css"

function ScrollAnimationTrigger() {
  return (

            <section className='cardsContainer'>
                {cardData.map((item)=>{
                  return(
                    <Card key={item.id}
                      src={item.image}
                      srcset={item.mobileImage}
                      alt={item.alt}
                      cardName={item.text}
                      
                      />
                  )
                })}
        
            </section>
  )
}

export default ScrollAnimationTrigger;
