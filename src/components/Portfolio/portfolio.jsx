import React, { useRef, useState } from 'react'
import { CustomStyled, WholeContainerBox, ArrowContainer, ServiceBlock2,TechyBox } from '../../StyledComponents/styledComponents'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import styled from 'styled-components';
import './portfolio.css';
import Restaruant from '../../assets/restaurantDesign.png'
import ChatApp from '../../assets/chat-app.png'
import Weather from '../../assets/weather.png'
import LinkIcon from '@mui/icons-material/Link';





const Portfolio = ({darkMode,onMouseEnter}) => {


  //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

    const works=[
      {photo:Restaruant,
        name:"Restaurant UI Design",
        technology:"Figma",
        link:""
       },
       {photo:ChatApp,
        name:"Chat Application",
        technology:"MERN",
        link:""
       },
       {photo:Weather,
        name:"Weather App",
        technology:"React",
        link:""
       },
       {photo:Restaruant,
       name:"Restaurant UI Design",
       technology:"Figma",
       link:""
      },
      {photo:ChatApp,
       name:"Chat Application",
       technology:"MERN",
       link:""
      },
      {photo:Weather,
       name:"Weather App",
       technology:"React",
       link:""
      },
      
    ];

  //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    
   
  
  
  
  
  let [leftitems,setLeftitems]=useState(0);
    let [rightitems,setRightitems]=useState(1);

    const containerRef = useRef(null);
    const scrollContainer = (direction) => {
    if (containerRef.current) {
        const scrollAmount = direction === 'left' ? -401 :401 ; 
        containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        
        if (scrollLeft <= 0) {
          setLeftitems(0); // No more items to the left
        } else {
          setLeftitems(1);
        }
    
        if (scrollLeft + clientWidth >= scrollWidth) {
          setRightitems(0); // No more items to the right
        } else {
          setRightitems(1);
        }
      }
    };
  



  return (
    <div id='portfolio' className='section' >
      <div className='portfolio-up'>
        <CustomStyled  title="MY WORKS" section="Featured Portfolios" />
        <div className='arrow-box'data-aos='fade-left'  data-aos-duration="1500">
          <ArrowContainer onClick={()=>{scrollContainer('left')}}  Items={leftitems}><NavigateBeforeIcon sx={{color:"#7E74F1"}}/></ArrowContainer>
          <ArrowContainer onClick={()=>{scrollContainer('right')}} Items={rightitems} ><NavigateBeforeIcon sx={{color:"#7E74F1", transform:"rotate(-180deg)"}} /></ArrowContainer>
        </div>
        </div>
        <div className='wrappingcontiner' >
        <WholeContainerBox  ref={containerRef}> 
          {/* {worksReduce.map((group,groupIndex)=>(
            <ItemsStyled key={groupIndex}> */}
              {works.map((item,index)=>(
                  <ServiceBlock2 key={index} height={402} darkMode={darkMode}>
                     <div className='imageBox'><img src={item.photo}/></div>
                      <div className='NameofStack'>{item.name}.</div>
                      <div className='techLinkBox'>
                        <TechyBox>{item.technology}</TechyBox>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <LinkIcon/>
                        </a>
                      </div>  
                </ServiceBlock2>
              ))}
            {/* </ItemsStyled>
          ))} */}
        </WholeContainerBox>
        </div>
    </div>
  )
}

export default Portfolio