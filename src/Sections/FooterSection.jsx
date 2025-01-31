import React from 'react'
import ContactForm from '../components/Contact/contact.jsx'
import Footer from '../components/Footer/footer.jsx'
const FooterSection = ({links,onMouseEnter}) => {
  
  return (
    <>
        <ContactForm  onMouseEnter={onMouseEnter}/>
        <Footer links={links}/>
    </>
  )
}

export default FooterSection