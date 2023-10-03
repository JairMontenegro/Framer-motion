import Card from "./Card";
import desktopDeepEart from "../images/desktop/image-deep-earth.jpg"; 
import mobileDeepEart from "../images/mobile/image-deep-earth.jpg"


function ScrollAnimationTrigger() {
  return (

            <section className='cards'>
              <Card 
                cardName="Deep Earth"
                srcset={mobileDeepEart}
                src={desktopDeepEart}
                alt="Deep Earth"
              />
              <Card 
                cardName="Deep Earth"
                srcset={mobileDeepEart}
                src={desktopDeepEart}
                alt="Deep Earth"
              />
            </section>
  )
}

export default ScrollAnimationTrigger;
