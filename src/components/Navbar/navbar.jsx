import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { Link as Oglink, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../../assets/UserLogo.png'
import iconDarkMode from '../../assets/UserLogoDarkMode.png';
import darkModemoon from '../../assets/Theme toggle.png'
import lightMode from '../../assets/lightMode.png'
import './navbar.css';
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import MenuIcon from '@mui/icons-material/Menu';

// Styled Tags Follows------------------------------------------------------------------>

const NavMenuitems= styled.div`
  display:flex;
  flex-direction:row;
  gap: 56px;
  width:40.6%;
  font-size: 16px;
  font-weight: 500;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   @media screen and (max-width: 768px) {
    display: none;
   }
   
  `;
const NavSideBar= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:13%;
  padding-right: 120px;
  
  
`;


const Resumebtn=styled.button`
  color: ${(props) => (props.darkMode? "white" : "black")};
  border:none;
    border-radius: 8px;
    border: 1px solid #F1F1F1;
    background: none;
    height:49px;
    padding: 16px 24px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
    display: none;
   }
`;

const SquezzedMenuitems=styled.div`
   display: ${(props)=> (props.showMenu? 'flex' : 'none')};
    flex-direction: column;
    text-align: left;
    position: absolute;
  
   top: 80px;
   font-weight: 700;
   margin-left: -50px;
   border-radius: 8px;
   left:60%;
   cursor: pointer;
   
   z-index:20;
   background-color:inherit;
   @media screen and (max-width:768px){
      margin-left: 120px;
      background-color:inherit;
      /* position: sticky; */
      
   }
   @media screen and (max-width:456px){
      left: 0;
      margin-left: 0;
      align-items: center;
      margin-top: 10px;
      width: 456px;
      background-color:inherit;
      /* position:fixed; */
     
   }
   
`;

const NavbarMain=styled.div`
    display: flex;
flex-direction: row;
justify-content: space-between;
width:100%;
align-items: center;
position: sticky;
top:0;
padding-top: 41px;
/* backdrop-filter: blur(20px); */

//background: inherit;
background:${(props)=>(props.darkMode? " #1e1e1e":"#ffffff")};

z-index: 10;



`;
// const StyledMenuIcon = styled(MenuIcon)`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: flex;
//     z-index: 11;
//   align-items: flex-end;
//     position: absolute;
//     margin-top: 20px;
//     margin-right:-500px;
    
//   }
// `;

// <------------------------------------------------------------------------------>
// <----------------Main Navigation Bar Starter Code------------------------------>

const Navbar = ({darkMode,toggleDarkMode,containerRef}) => {
  // the Below Logo variable should be given by you withe your specific logos 
  // and in darkmOde Logo also
  
  const Logo=darkMode?iconDarkMode:icon;
  const themeimg=darkMode? lightMode: darkModemoon;
  const fileUrl=""; //Your Resume file link
  const fileName=""; //Your Resume File Name

  // <----------------------------------------------------------------------------------->
  let [showMenu,setShowMenu]=useState(false);
  let [mobMode,setMobMode]=useState(false);
  let [mobshowMenu,setMobshowMenu]=useState(false);
  const [isActive,setIsActive]=useState(null);
  // const location=useLocation();
  // console.log(location.pathname);
  //const isActive=new URLSearchParams(location.search).get("value");
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
        element.scrollIntoView({ behavior: "smooth" ,block:"start"});
        // const offset = 50; // Adjust this value based on your navbar height
        // setTimeout(() => {
        //   window.scrollBy(0, -offset); // Scroll back by the offset amount
        // }, 500); 
    }
  };
  const location=useLocation();
    
  
    const handleNavigate=(id)=>{
      
    
        if (id) {
            scrollToSection(id);
            setIsActive(id);
        }
    };
  
     // Single ref for all sections
    const [activeSection, setActiveSection] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
  
    const sectionIds = ["hero", "services", "portfolio", "experience", "blogs","testimonals","eduskills","contact"]; // Section IDs
  
    useEffect(() => {
      const handleScroll = () => {
        if (containerRef.current) {
          const scrollPosition = window.scrollY + window.innerHeight / 2;
  
          sectionIds.forEach((id) => {
            const section = containerRef.current.querySelector(`#${id}`);
            if (section) {
              const rect = section.getBoundingClientRect();
              const sectionTop = window.scrollY + rect.top;
              const sectionBottom = sectionTop + rect.height;
  
              if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                if (activeSection !== id) {
                  setActiveSection(id);
                  setSearchParams({ value: id }); // Update search params
                  setIsActive(id);
                }
              }
            }
          });
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [activeSection, sectionIds, setSearchParams]);
  // const [searchParams] = useSearchParams();
  // const [isActive,setIsActive]=useState(null);
  // useEffect(()=>{
  //   const sectionValue = searchParams.get('value');
  //   setIsActive(sectionValue);
  // },[searchParams]);


  
  const MenuItems=[
    {name:"Services", url:"services"},
    {name:"Portfolio", url:"portfolio"},
    {name:"Expereince", url:"experience"},
    {name:"Blog", url:"blogs"}
  ];
  const SquezzedMenu=[
    {name:"Contact", url:"contact"},
    {name:"Education & Skills", url:"eduskills"},
    {name:"Social Media", url:"footer"},
    {name:"Testimonals", url:"testimonals"},
    {name:"Home", url:"hero"}
    
  ];

  const MobmenuItems=[
    {name:"Services", url:"services"},
    {name:"Portfolio", url:"portfolio"},
    {name:"Expereince", url:"experience"},
    {name:"Blog", url:"blogs"},
    {name:"Education & Skills", url:"eduskills"},
    {name:"Testimonals", url:"testimonals"},

  ]
  
 
  

  return (
    <>
    <NavbarMain darkMode={darkMode}>
        <img src={Logo} alt='' className='iconlogo' />
        <NavMenuitems className='navmenuitems'>
          {MenuItems.map((item,index)=>( 
            <Oglink key={index} to={`/?value=${item.url}`} className={`${isActive===item.url?"active":""}`} onClick={()=>{handleNavigate(item.url)}} >{item.name}</Oglink>
            // <Link key={index} activeClass='active' to="/section?value=services" spy={true} offset={-50} duration={500} smooth={true}  >{item.name}</Link>
            ))}
            <MoreHorizOutlinedIcon style={{cursor:"pointer"}}onClick={()=> {setShowMenu(!showMenu)}} ></MoreHorizOutlinedIcon>
            </NavMenuitems>
            <SquezzedMenuitems showMenu={showMenu} darkMode={darkMode}>
          {SquezzedMenu.map((item,index)=>(
             <Oglink key={index} to={`/?value=${item.url}`}  className={`${isActive===item.url?"active":"navinsideItem"}`} onClick={()=>{setShowMenu(!showMenu);handleNavigate(item.url)}}>{item.name}</Oglink>
          // <Link key={index} to={item.url} activeClass='active' spy={true} offset={-100} duration={500} smooth={true} className='navinsideItem' onClick={()=>{setShowMenu(!showMenu)}}>{item.name}</Link>
          ))}
          </SquezzedMenuitems>
          <SquezzedMenuitems showMenu={showMenu} style={{display:mobMode?'flex':'none'}}>
          {MobmenuItems.map((item,index)=>(
             <Oglink key={index} to={`/?value=${item.url}`}  className={`${isActive===item.url?"active":"navinsideItem"}`} onClick={()=>{setShowMenu(!showMenu); handleNavigate(item.url)}}>{item.name}</Oglink>
            // <Link key={index} to={item.url} activeClass='active' spy={true} offset={-100} duration={500} smooth={true} className='navinsideItem' onClick={()=>{setShowMenu(!showMenu)}}>{item.name}</Link>
          ))}
          <a href={fileUrl} download={fileName} >
                  Resume
          </a>
    
        </SquezzedMenuitems>     
        
        <NavSideBar>
          <a><img src={themeimg} alt='' className='tooglebtn' onClick={toggleDarkMode} /></a>
          <a href={fileUrl} download={fileName} >
          <Resumebtn darkMode={darkMode}>Resume</Resumebtn>
          </a>
        </NavSideBar>
        <div className='mobmenu'><MenuIcon onClick={()=> setMobMode(!mobMode)}/></div>
        
        
            
    </NavbarMain>
   
    
    
  </>  
)
}

export default Navbar;