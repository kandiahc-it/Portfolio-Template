import React, { useState } from 'react'
import axios  from 'axios';
import './contact.css'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components';


const FormRows=styled.div`
  background: inherit;
`


const Contact = ({onMouseEnter}) => {
 
  //<--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> 
  const contactsList=[
    {photo:LocationOnIcon,name:"Address",text:"378/b, Merin St., California"},
    {photo:PhoneInTalkIcon,name:"Phone",text:"044-2156-2500"},
    {photo:MailOutlineIcon,name:"Mail",text:"Alexsmith@gmail.com"}

  ];

  const links = contactsList.map((item) => {
    if (item.name === "Phone") {
      return `tel:${item.text}`; 
    } else if (item.name === "Mail") {
      return `mailto:${item.text}`; 
    } else {
      return ""; 
    }
  });

// <----------------------------------------------------------------BACKEND DONT TOUCH IT---------------------------------------------------------->


const data=[
  {name:""},
  {email:""},
  {message:""}
]
const handleSubmit=(e,actions)=>{
  e.preventDefault();
  toast.success("Form Submitted Sucessfully!!!");
  e.target.submit();
}


  return (
    <div id='contact' className='section' >
      <div className='formBox'>
        <form className='Form'  action={`https://formsubmit.co/${contactsList[2].text}.com`} method="POST"  onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Name' className='NameBox' value={data.name} required data-aos='fade-up' data-aos-duration='1500'/>
          <input type='email' name='email' placeholder='Email' className='EmailBox' value={data.email} required data-aos='fade-up' data-aos-duration='1500' />
          <textarea  type='text' name='message' placeholder='Message' className='MessageBox' value={data.message} required  data-aos='fade-up' data-aos-duration='1500'/>
          <button type='submit' className='SubmitBtn' data-aos='fade-up' data-aos-duration='1500'>Submit</button>
        <ToastContainer/>
        </form>

      </div>
      <div className='contactLeft'>
        {contactsList.map((item,index)=>(
          <a href={links[index]}><div className='contactBox' key={index} data-aos='fade-up' data-aos-duration='1500'>
            <div className='iconBox'><item.photo style={{color:"#747fe1"}} className='icon'/></div>
            <div className=''>
              <div className=''>{item.name}</div>
              <div className=''>{item.text}</div>
            </div>
          </div>
          </a>
        ))}

      </div>
    </div>
  )
}

export default Contact;