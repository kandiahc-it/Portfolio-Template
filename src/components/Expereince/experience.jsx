import React, { useState } from 'react'
import { CustomStyled, TechyBox } from '../../StyledComponents/styledComponents';
import './expereince.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import styled from 'styled-components';

const NamesBox=styled.div.attrs(()=>({
  "data-aos-delay":"50",
  "data-aos":"fade-up",
}))`
  background: inherit;
  width: 280px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  border-radius: 8px;
  padding-left: 5px;
  cursor: pointer;
  background: ${(props)=>(props.isAcitve?(props.darkMode?"#535353a4":"#fff"):"inherit")};
  color: ${(props)=>(props.isAcitve?"#747Ef1":"inherit")};
  @media screen and (max-width: 768px) {
    width: fit-content;
    justify-content: center;
  }

`;

const ExperienceBox=styled.div`
  height: 774px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background:${(props)=>(props.darkMode?"#1E1E1E":"#FBFBFB")} ;
  @media screen and (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
  }
  @media screen and (max-width: 456px) {
    height: fit-content;
    flex-direction: column;
  }
`;



const Experience = ({darkMode,onMouseEnter}) => {
  let[isAnime,setIsAnime]=useState(false);

// <-----------------------The Below List You can specify Your Experience in The Companies------------------------------------------------------->
const ExpereinceList = [
  {
    name: "Google",
    position: "Front-End Developer",
    CompanywebLink: "https://google.com",
    Address: "Mountain View, California, USA",
    date: { startDate: "Jan-2019", EndDate: "Dec-2021" },
    Time: "Hybrid",
    TechStackUsed: ["React", "JavaScript", "HTML", "CSS"],
    WorksDone: [
      "Developed interactive user interfaces",
      "Optimized web application performance",
      "Collaborated with cross-functional teams",
      "Implemented responsive web design"
    ]
  },
  { 
    name: "Amazon",
    position: "Full Stack Developer",
    CompanywebLink: "https://amazon.com",
    Address: "Seattle, Washington, USA",
    date: { startDate: "Feb-2022", EndDate: "Present" },
    Time: "Remote",
    TechStackUsed: ["Node.js", "Express", "MongoDB", "React"],
    WorksDone: [
      "Developed scalable web applications",
      "Implemented RESTful APIs",
      "Managed cloud deployments",
      "Enhanced security protocols"
    ]
  },
  {
    name: "Netflix",
    position: "Software Engineer",
    CompanywebLink: "https://netflix.com",
    Address: "Los Gatos, California, USA",
    date: { startDate: "Aug-2017", EndDate: "Oct-2020" },
    Time: "On-site",
    TechStackUsed: ["Python", "Django", "React", "AWS"],
    WorksDone: [
      "Built content recommendation algorithms",
      "Maintained high availability services",
      "Developed video streaming solutions",
      "Improved system performance by 20%"
    ]
  },
  {
    name: "Microsoft",
    position: "UI/UX Designer",
    CompanywebLink: "https://microsoft.com",
    Address: "Redmond, Washington, USA",
    date: { startDate: "Mar-2015", EndDate: "Jul-2019" },
    Time: "On-site",
    TechStackUsed: ["Adobe XD", "Figma", "JavaScript", "CSS"],
    WorksDone: [
      "Redesigned application interfaces",
      "Conducted user testing and feedback sessions",
      "Enhanced accessibility compliance",
      "Collaborated with developers for seamless handoff"
    ]
  }
];

  //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

  let[isAcitveItem,setIsActiveItem]=useState(0);


  return (
    <ExperienceBox darkMode={darkMode} id='experience' className='section' >
      
      <div className='sideBarInExp' data-aos='fade-up'  data-aos-duration="1500">
        <CustomStyled title="CAREER PATH" section="Work Experience"/>
        <div className='Namesboxcontainer'>{ExpereinceList.map((item,index)=>(
          <NamesBox key={index}  onClick={()=>{setIsActiveItem(index);setIsAnime(!isAnime);}} isAcitve={isAcitveItem===item.id} darkMode={darkMode}>
            <div className=''>{item.name}</div>
            <NavigateBeforeIcon  style={{transform:"rotate(-180deg)"}}/>
          </NamesBox>
        ))}
        </div>
      </div>

      <div className='sideBarExpanded' data-aos='fade-up'  data-aos-duration="1500">
        {ExpereinceList.map((item,index)=>index===isAcitveItem?(
            <div key={item.id} className='' data-aos='fade-up'  data-aos-duration="1500">
              <div className='itemsFiels'>{item.position} <a href={item.CompanywebLink}>{item.name}.inc</a></div>
              <div className='Address'>{item.Addres}</div>
              <div className='TmeStyle'>{item.date.startDate}-{item.date.EndDate} · {item.Time}</div>
              <div className='TechboxStyle'>
                {item.TechStackUsed.map((tech,techindex)=>(
                  <TechyBox key={techindex}>{tech}</TechyBox>
                ))}
              </div>
              <hr style={{color:"black",width:"100%",marginTop:"40px",marginBottom:"40px"}}/>
              <div className=''>
                {item.WorksDone.map((worksDone,worksindex)=>(
                <div key={worksindex} className='workcontainer' data-aos-delay='50' data-aos='fade-up'>
                   <hr style={{width:"10px",height:"2px"}}/> <div >{worksDone}</div>
                </div>
                ))}
              
              </div>
              
              
            </div>
        ):null
          
        )}



      </div>
    </ExperienceBox>
  )
}

export default Experience;