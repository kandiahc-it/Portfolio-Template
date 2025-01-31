import React from 'react'
import './services.css'
import {CustomStyled, ServiceBlock,IconBox,ServicesTitle,ServicesSection,ServiceBar} from '../../StyledComponents/styledComponents.jsx'

import {ItemsStyled} from '../../StyledComponents/styledComponents'
import LanguageIcon from '@mui/icons-material/Language';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';


const services = ({darkMode,onMouseEnter}) => {
//<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  const serviceTitles = [
    "UI/UX Design",
    "Application Development",
    "Web Development",
  ];

  const serviceDescription=[
    "Turn what you have in mind of a digital product into reality. For any platform you consider.",
    "Standard designing, building, and implementing your applications with documentation.",
    "Create and maintain your websites and also take care of its performance and traffic capacity."
  ];
   //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  
  
  
  
  
  
  
   const icons=[
    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 15H17.5M1.5 1V12H17.5V1L13.5 5L9.5 1L5.5 5L1.5 1Z" stroke="#7E74F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    <LayersOutlinedIcon  sx={{ color: '#7E74F1' }} />,<LanguageIcon sx={{ color: '#7E74F1' }}/>
    
  ]


  return (
    
    <ServiceBar id='services' className='section' darkMode={darkMode} >
      <CustomStyled title="SERVICES" section="Specialization in"/>
      <ItemsStyled>
        {serviceTitles.map((item,index)=>(
          <ServiceBlock darkMode={darkMode} height={294}>
          <IconBox>{icons[index]}</IconBox>
          <ServicesTitle>{item}</ServicesTitle>
          <ServicesSection>{serviceDescription[index]}</ServicesSection>
       
        
        </ServiceBlock>))
        }
      </ItemsStyled>
    </ServiceBar>
   
  )
}

export default services