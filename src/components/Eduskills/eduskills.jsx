import React from 'react'
import { CustomStyled } from '../../StyledComponents/styledComponents'
import './eduskills.css'
const eduskills = ({onMouseEnter}) => {
  // Enter the Description of the  Skill you have learnt //
  // <--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  const SkillDescription="For 5+ years, I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.";

  const SkillsInTechnologies=[
    {name:"React",percentage:"85%"},
    {name:"Angular",percentage:"25%"},
    {name:"Node Js",percentage:"45%"},
  ];

  const educationDetails=[
    {
      name: "Harvard University", // Name of the University/School
      year: "2017 - 2021", // Year pursued
      degree: "Bachelor's Degree", // Enter the Degree Master/Diploma/Bachelor
      domain: "Computer Science", // Which Stream You studied
    },
    {
      name: "Stanford University", // Name of the University/School
      year: "2021 - 2023", // Year pursued
      degree: "Master's Degree", // Enter the Degree Master/Diploma/Bachelor
      domain: "Artificial Intelligence", // Which Stream You studied
    },
    {
      name: "MIT (Massachusetts Institute of Technology)", // Name of the University/School
      year: "2015 - 2017", // Year pursued
      degree: "Diploma", // Enter the Degree Master/Diploma/Bachelor
      domain: "Data Science and Analytics", // Which Stream You studied
    },
  ];

// <------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

  return (
    <div  id='eduskills' className='section' >
      <div className='' data-aos='fade-up'  data-aos-duration="1500">
          <CustomStyled title="LEARNING PATH" section="Education & Skills"/>
        </div>
      <div className='edufoot'> 
        <div className='eduskillsLeft' data-aos='fade-up'  data-aos-duration="1500">
        
            <div className='line'></div>  
            {educationDetails.map((item,index)=>(
              <div key={index} className='educontainer' data-aos-delay='50' data-aos='fade-up'>
                <div className='circle'></div>
                <div className='eduContaninerItems'>
                  <div className=''>{item.name}</div>
                  <div className=''>{item.degree} - {item.domain}</div>
                  <div className='Yearedu'>{item.year}</div>
                </div>
            </div>
           ))}
          
        </div>
        <div className='eduskillsRight' data-aos='fade-up'  data-aos-duration="1500">
        <div className='Describe'>{SkillDescription}</div>
        <div className='PercentList'>
          {SkillsInTechnologies.map((item,index)=>(
            <div key={index} className='InerBox' data-aos='fade-up'  data-aos-duration="1500">
              <div className='skillName' >{item.name}</div>
              <div className='containerbg'><div className='containerIn' style={{width:item.percentage}} data-aos="fade-right"  ></div></div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </div>
  )
}

export default eduskills