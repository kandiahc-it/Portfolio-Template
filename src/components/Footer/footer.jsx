import React from 'react'
import './footer.css'
import { SocialLinks } from '../../StyledComponents/styledComponents'
import { Copyright } from '@mui/icons-material'

const footer = ({links}) => {

  //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  const year="2024";
  const Author="Alex Smith";
  //<-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  return (
    <div className="footer">
      <SocialLinks {...links}/>
      <div className='footercopy' >{year}<Copyright/>{Author}</div>
    </div>
  )
}

export default footer