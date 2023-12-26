import React from 'react';
import ContactForm from "@/components/contactForm";
import Link from 'next/link';


const contactform = () => {
  return (<>
  <div id="wrapper">
  <header id="header">
        <div className="inner">
           
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="symbol">
              <img src="images/logo.svg" alt="" />
            </span>
            <span className="title">back</span>
          </Link> 
          </div>
      </header>
      <div className="inner">
    
    <ContactForm/>

  
  </div>
 </div>
  
  </>
      )};

  export default contactform;