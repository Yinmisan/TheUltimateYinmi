import React from 'react';
import ContactForm from "@/components/contactForm";


const contactform = () => {
  return (<>
  <div id="wrapper">
  <header id="header">
        <div className="inner">
           
          {/* Logo */}
          <a href="/" className="logo">
            <span className="symbol">
              <img src="images/logo.svg" alt="" />
            </span>
            <span className="title">Main</span>
          </a> 
          </div>
      </header>
      <div className="inner">
    
    <ContactForm/>

  
  </div>
 </div>
  
  </>
      )};

  export default contactform;