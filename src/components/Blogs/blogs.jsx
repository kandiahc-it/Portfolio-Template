import React from 'react'
import { CustomStyled, ItemsStyled, ServiceBlock ,DateBox} from '../../StyledComponents/styledComponents'
import './blogs.css'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import styled from 'styled-components'



const blogs = ({darkMode,onMouseEnter}) => {
  //<--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> 
  const blogItems = [
    {
      name: "How to Prototype in Figma?",
      photo: blog1,
      link: "https://example.com/prototype-in-figma",
      Description: "Learn the essential steps and best practices for prototyping in Figma, including tips to enhance your design workflow.",
      date: "July 15, 2021"
    },
    {
      name: "Understanding Flexbox in CSS",
      photo: blog2,
      link: "https://example.com/flexbox-guide",
      Description: "A comprehensive guide to mastering Flexbox layout in CSS, making complex layouts simple and efficient.",
      date: "August 10, 2021"
    },
    {
      name: "Tips for Effective UX Research",
      photo: blog3,
      link: "https://example.com/ux-research-tips",
      Description: "Explore proven techniques to carry out effective user experience research and gather meaningful insights.",
      date: "September 5, 2021"
    }
  ];

  //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  


  return (
    <div id='blogs'>
      <div id='blogsContainer'>
      <CustomStyled title="MY ARTICLES" section="Personal Blog"/>
      <ItemsStyled>
        {blogItems.map((item,index)=>(
          <ServiceBlock key={index}  darkMode={darkMode} height={425}>
            <div className='imgbox'><img src={item.photo} /></div>
            <div className='ImgDown'>
              <div className='NameBlog'>{item.name}</div>
              <DateBox darkMode={darkMode}><div className='DateBlog'>{item.date}</div></DateBox>
              <div className='DescBlog'>{item.Description}</div>
              <div className='linkBlog'><a href={item.link} >Continue Reading...</a></div>
            </div>
          </ServiceBlock>
        ))}
      </ItemsStyled>
     </div> 
    </div>
  )
}

export default blogs