import React from 'react'
import Lines from '../../assets/lines.png';
import './hero.css';
import {Styledtext} from '../../StyledComponents/styledComponents.jsx'
import {SocialLinks,HeroRound} from '../../StyledComponents/styledComponents.jsx';

import { TypeAnimation } from "react-type-animation";
const hero = ({name,Photo,Links,darkMode,onMouseEnter}) => {
   // The Below Text can Be Modified By Your Verse
   
  //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  const AboutYou="Creative front-end developer with more than +5 years of experience in enterprise companies and startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX";

 

  //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->





  return (
    <div  id='hero' className='section' >
      
      <div className='HeroLeft' data-aos='fade-left' data-aos-duration='1500'>
        <Styledtext Text="MY NAME IS"></Styledtext>
        <div className='NameText'>{name.firstName}<span className='spannedText'>
        <TypeAnimation
            sequence={[
              `${name.lastName}.`,
              2000,
              "",
              1000,
            ]}
            wrapper="span"
            cursor
            speed={50}
            repeat={Infinity}
            
          />
        </span></div>
        <div className='Description'>{AboutYou}</div>
        <SocialLinks {...Links}/>
      </div>
      
      
      
      <div className='HeroRight' data-aos='fade-right' data-aos-duration='1500'>
        
        <HeroRound darkMode={darkMode}>
        <img src={Photo} alt='' className='heroImg'/>
        </HeroRound>
        {/* <div className='bgfront'>
        <img src={Lines} alt='' className='lines'/>
        </div> */}
        
        
      </div>
    </div>
  )
}

export default hero