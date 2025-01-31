import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;
const Line=styled.div`
    width:16px;
    height:2px;
    background:#D9D9D9;
`;
const Textcontent=styled.p`
    font-family:Inter;
    font-weight: 500;
    font-size: 12px;
    color: ${(props)=> (props.darkMode? "white" :"#656D72")};
    letter-spacing: 7.5px;

`;

const StyledOverall=styled.div`
    display: flex;
    flex-direction: row;
    gap:20px;
    align-items: center;
`;

export const Styledtext = ({Text}) => {
  return (
    <StyledOverall>
        <Line/>
        <Textcontent>{Text}</Textcontent>
    </StyledOverall>
   
  )
}


export  const SectionStyledd=styled.div`
//font-family: Plus Jarkata Sans;
font-weight: 700;
font-size: 36px;
color:inherit;
`;

export const ItemsStyled=styled.div`
  display: flex;
  flex-direction: row;
  width: 1195px;
  /* overflow:hidden; */
  justify-content: space-between;
  gap:20px;
  align-items: center;
  /* animation: ${appear} linear 1.5ms; */
  /* animation-timeline: view(); */
  @media screen and (max-width:768px) {
    width: 100%;
    flex-direction: column;
    margin-top:20px;
    
  }
  @media screen and (max-width:456px) {
    flex-direction: column;
    margin-top: 20px;
  }

`;
export const CustomTitle=styled.div`
  font-size: 16px;
  font-weight: 500;
  
`;
export const WholeStyle=styled.div.attrs(() => ({
  'data-aos': 'fade-right',
  'data-aos-duration':"1500"
}))`
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: 78px;
`


export const CustomStyled=({title,section})=>{
  
  return(
    <WholeStyle>
      <Styledtext Text={title}/>
      <SectionStyledd>{section}</SectionStyledd>
    </WholeStyle>
  )
}


export const ServiceBlock=styled.div.attrs(() => ({
  'data-aos': 'fade-up',
  'data-aos-duration':"1500"
}))`
background: ${(props)=>(props.darkMode? "#535353":"white")};
height: ${(props)=>(props.height + "px") };
width: 361px;
border: 1px solid rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
gap:13px;
align-items: center;
text-align: center;
border-radius:8px;
justify-content: center;

animation: ${appear} linear 1.5ms;
/* animation-timeline: view(); */
/* animation-timeline: view();
animation-range: entry 0% cover 40%; */
@media screen and (max-width:768px) {

    width: 90%;
  }
  @media screen and (max-width:456px) {
    width:361px;
  }

`;

export const DateBox=styled.div`
background: ${(props)=>(props.darkMode?"#373737":"#FBFBFB")};
width: fit-content;
padding:4px 8px;
border-radius: 2px;
`


export const TechyBox=styled.div`
   height: 23px;
    width:79px;
    border-radius: 4px;
    border: 1px solid #F1F1F1;
    display: flex;
    align-items: center;
    justify-content: center;
`



const Socialdiv=styled.div`
    width:192px;
    display: flex;
    flex-direction: row;
    height: 24px;
    justify-content: space-between;
    align-items: center;
`;


export const SocialLinks = (props={}) => {
    //console.log({links});
    const{
        instagram,
        github,
        linkedin,
        twitter
        
      }=(props);

      

    const SocialMediaIcons=[
        {src:<InstagramIcon />,url: instagram},
        {src:<GitHubIcon/>,url: github},
        {src:<TwitterIcon/>,url: twitter},
        {src:<LinkedInIcon/>,url: linkedin}
    ];
  return (
    <Socialdiv>
        {SocialMediaIcons.map((item,index)=>(
           
            <a href={item.url} key={index} style={{cursor:'pointer', background:'inherit'}}  >{item.src}</a>
        ))}
    </Socialdiv>
  )
}
const glow=keyframes `
  0% {
    box-shadow: 0 0 15px #7E74F1, 0 0 30px #7E74F1, 0 0 45px #7E74F1;
  }
  50% {
    box-shadow: 0 0 30px #7E74F1, 0 0 60px #7E74F1, 0 0 90px #7E74F1;
  }
  100% {
    box-shadow: 0 0 15px #7E74F1, 0 0 30px #7E74F1, 0 0 45px #7E74F1;
  }
`
export const HeroRound=styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
    width: 330px;
    height: 330px;
    /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #7E74F1 100%); */ 
    /* background:transparent; */
    overflow: hidden;
    border: ${(props)=>(props.darkMode?'solid 10px #7E74F1':'solid 2px #000000')};
    box-shadow: ${(props)=>(props.darkMode?'0 0 15px #7E74F1, 0 0 30px #7E74F1, 0 0 45px #7E74F1':'5px 5px 10px rgba(0, 0, 0, 0.9)')};
    border-radius: ${(props)=>(props.darkMode?"1000px":"1000px")};
    &:hover {
    ${(props) =>
      props.darkMode &&
      css`
        animation: ${glow} 1s ease-in-out;
      `}
  }
  

`;

export const ArrowContainer=styled.div`
   background: ${(props)=>(props.Items===0?"#eae6fe5f":"#EAE6FE")}   ;                   /*#EAE6FE; //#eae6fe5f */
  height:40px ;
  width: 40px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


export const WholeContainerBox=styled.div`
  width:auto;
  gap:56px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  justify-content: space-between;
  /* margin-left: 116px; */
`
export const ServiceBlock2=styled.div` 
background: ${(props)=>(props.darkMode? "#535353":"white")};
height: ${(props)=>(props.height + "px") };
width: 361px;
border: 1px solid rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
gap:13px;
align-items: center;
text-align: center;
border-radius:8px;
justify-content: center;

`;
export const IconBox=styled.div`
  width:56px;
  height:56px;
  background: #F5F3FE;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
 

`;
export const ServicesTitle=styled.div`
  font-size: 16px;
  font-weight: 600;
`;


export const ServicesSection=styled.div`
  font-size:14px;
  font-weight:400;
  width: 247px;
`;

export const ServiceBar=styled.div`
   background: ${(props)=> (props.darkMode? "#383737":"#FBFBFB")};
    height: 774px;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media screen and (max-width:768px) {
      
      height: fit-content ;
    }
    @media screen and (max-width:456px) {
      
      height: fit-content;
    }
`;
export const Testimonals=styled.div`
  background:${(props)=>(props.darkMode?"#383737":"#FBFBFB")} ;
  height:756px ;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  gap:70px;
  @media screen and (max-width:768px){
    height:fit-content ;
    
  }
  @media screen and (max-width:456px){
    height:fit-content ;
  }
`;