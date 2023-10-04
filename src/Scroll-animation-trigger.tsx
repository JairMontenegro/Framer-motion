import Card from "./Card";
import "./Scroll-animation-trigger.css"
import desktopDeepEart from "../images/desktop/image-deep-earth.jpg"; 
import mobileDeepEart from "../images/mobile/image-deep-earth.jpg"
import desktopNightArcade from "../images/desktop/image-night-arcade.jpg"
import mobileNightArcade from "../images/mobile/image-night-arcade.jpg"
import desktopSoccerTeam from "../images/desktop/image-soccer-team.jpg"
import mobileSoccerTeam from "../images/mobile/image-soccer-team.jpg"
import desktopTheGrid from "../images/desktop/image-grid.jpg"
import mobileTheGrid from "../images/mobile/image-grid.jpg"
import desktopFromAbove from "../images/desktop/image-from-above.jpg"
import mobileFromAbove from "../images/mobile/image-from-above.jpg"
import desktopBorealis from "../images/desktop/image-pocket-borealis.jpg"
import mobileBorealis from "../images/mobile/image-pocket-borealis.jpg"
import desktopTheCuriosity from "../images/desktop/image-curiosity.jpg"
import mobileTheCuriosity from "../images/mobile/image-curiosity.jpg"
import desktopFishEye from "../images/desktop/image-fisheye.jpg"
import mobileFishEye from "../images/mobile/image-fisheye.jpg"



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
                cardName="Night Arcade"
                srcset={mobileNightArcade}
                src={desktopNightArcade}
                alt="Night Arcade"
              />
              <Card 
                cardName="Soccer Team VR"
                srcset={mobileSoccerTeam}
                src={desktopSoccerTeam}
                alt="Soccer Team Team VR"
              />
              <Card 
                cardName="The grid"
                srcset={mobileTheGrid}
                src={desktopTheGrid}
                alt="The grid"
              />
              <Card 
                cardName="From up above VR"
                srcset={mobileFromAbove}
                src={desktopFromAbove}
                alt="From up above VR"
              />
              <Card 
                cardName="Pocket Borealis"
                srcset={mobileBorealis}
                src={desktopBorealis}
                alt="Pocket Borealis"
              />
              <Card 
                cardName="The curiosity"
                srcset={mobileTheCuriosity}
                src={desktopTheCuriosity}
                alt="The curiosity"
              />
              <Card 
                cardName="Make it fish eye"
                srcset={mobileFishEye}
                src={desktopFishEye}
                alt="Make it fish eye"
              />
            </section>
  )
}

export default ScrollAnimationTrigger;
