import React from 'react'
import { CustomStyled, DateBox, ItemsStyled, ServiceBlock,Testimonals } from '../../StyledComponents/styledComponents'
import Testimonal1 from '../../assets/Testimonal1.png';
import Testimonal2 from '../../assets/Testimonal2.png';
import Testimonal3 from '../../assets/Testimonal3.png';
import './testimonals.css'



const testimonals = ({darkMode,onMouseEnter}) => {
// <----------------------------------------------------------------------------------------------------------------------------------------------->
  const testimonalsList=[
    {
      name: "Amelia Miller",
      profession: "Designer",
      Description: "We were very pleased to hear how you resolved our website's user interface issues and challenges.",
      Photo: Testimonal1
    },
    {
      name: "James Smith",
      profession: "Software Engineer",
      Description: "Your expertise in developing efficient, clean code greatly improved our project timelines and product quality.",
      Photo: Testimonal2
    },
    {
      name: "Sophia Johnson",
      profession: "Project Manager",
      Description: "Thanks to your strategic planning and execution, our product launch was a massive success.",
      Photo: Testimonal3
    },
  ]

// <---------------------------------------------------------------------------------------------------------------------------------------------->
  return (
    <Testimonals darkMode={darkMode} id='testimonals' className='section' >
      <div className='testimonals'>
        <CustomStyled title="MY CLIENTS" section="Testimonals"/>
      </div>
      <ItemsStyled style={{gap:"60px"}}>
        {testimonalsList.map((item,index)=>(
          <ServiceBlock key={index} darkMode={darkMode} style={{alignItems:"start", paddingLeft:"20px"}}>
            <div className='TestimonalsImg'><img src={item.Photo} /></div>
            <div className='TestimonalDesc'>{item.Description}</div>
            <div className='TestimonalName'>{item.name}</div>
            <div className='TestimonalProfession'><DateBox darkMode={darkMode}>{item.profession}</DateBox></div>
          </ServiceBlock>
        ))}
      </ItemsStyled>
    </Testimonals>
  )
}

export default testimonals