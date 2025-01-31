import './App.css';
import Navbar from './components/Navbar/navbar.jsx'
import Hero from './components/Hero/hero.jsx';
import Services from './components/Services/services.jsx'
import Portfolio from './components/Portfolio/portfolio.jsx'
import Expereince from './components/Expereince/experience.jsx'
import Blog from './components/Blogs/blogs.jsx'
import Testimonal from './components/Testimonals/testimonals.jsx'
import Eduskill from './components/Eduskills/eduskills.jsx'
import Footer from './Sections/FooterSection.jsx'
import HeroImg from './assets/HeroImg.png';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate, useSearchParams } from 'react-router-dom';

function App() {
  
// <--------------------------------------------------------------------------------------------------------------------------------------------->
// Here in the Name Section You can enter your name as firstname and last name  
const name={
  firstName:"Alex",
  lastName:"Smith"
};
//  Here in the below section is your Social Links Props
// You can specify your links it will be reflected in the particular pages
// Eg: instagram:"https://instagram.com/alex_01";

const socialLinksProps = {
  instagram: "https://instagram.com/alexsmith",
  github: "https://github.com/alexsmith",
  linkedin: "https://linkedin.com/alex-smith",
  twitter: "https://twitter.com/alex-smith"
};

// Here you can give User Photo in the Hero Section 
// It should be in the format of .png or .jpg
// you should import your image in the particular assets Folder

const User_Photo=HeroImg;

// Navigate to change more details navigate to components folder and change it.
// In All components ther must be Long dotted dashed lines like the below line In between 
// data only be changed by user Other works are not to be touched
// <--------------------------------------------------------------------------------------------------------------------------------------------->








const useWindowListener=(eventType, listener)=> {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false); // State for click animation
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 });

  // Pointer movement listener for the entire window
  useWindowListener('pointermove', (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  });
  useEffect(() => {
    let animationFrameId;

    const smoothFollow = () => {
      setDelayedPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2, // Smooth easing
        y: prev.y + (position.y - prev.y) * 0.2, // Smooth easing
      }));
      animationFrameId = requestAnimationFrame(smoothFollow);
    };

    animationFrameId = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Pointer click listener
  const handleClick = () => {
    setIsClicked(true);
    console.log(setIsClicked);
    setTimeout(() => {
      setIsClicked(false); // Reset after animation duration
    }, 50); // Duration of the animation
  };



const [darkMode, setDarkMode] = useState(true);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const containerRef=useRef();
  

  return (
    
    <div className="App" onClick={handleClick} ref={containerRef} style={{background:darkMode?"#1e1e1e":"white",color:darkMode?"#fff":"#000"}} >
    
          {/* Custom cursor with animated dot */}
          <div
    style={{
      position: "fixed",
      left: delayedPosition.x - 24, // Center the cursor ring
      top: delayedPosition.y - 24, // Center the cursor ring
      width: 48,
      height: 48,
      border: isClicked ? "none" : "1px solid rgba(126, 116, 241, 0.5)", // Border disappears on click
      borderRadius: "50%",
      pointerEvents: "none", // Allow interactions through
      zIndex: 9998, // Ensure behind the dot
      transition: "border 0.2s",
    }}
  />
  {/* Cursor inner dot */}
  <div
    style={{
      position: "fixed",
      left: position.x - 5, // Center the dot
      top: position.y - 5, // Center the dot
      width: isClicked ? 10 : 5, // Dot size changes on click
      height: isClicked ? 10 : 5,
      backgroundColor: "#747ef1", // Dot color
      borderRadius: "50%", // Make it round
      zIndex: 9999, // Ensure on top
      animation: isClicked ? "none" : "pulse 1s infinite", // Pulse animation
      pointerEvents: "none", // No blocking interactions
    }}
  />
          {/* </div> */}
     
       <Routes>
        <Route path='/' element={
          <>
          
          <Navbar  darkMode={darkMode} toggleDarkMode={toggleDarkMode} containerRef={containerRef}/>
          
            <Hero name={name} Photo={User_Photo}  Links={socialLinksProps} darkMode={darkMode}  /> 
         <Services darkMode={darkMode} />
        <Portfolio darkMode={darkMode} />
        <Expereince darkMode={darkMode} />
        <Blog darkMode={darkMode} />
        <Testimonal darkMode={darkMode} />
        <Eduskill />
      <Footer links={socialLinksProps} />
          
          
          </>
        }/>
        
        
       </Routes> 
       
      
    </div>
   
  );
}

export default App;
