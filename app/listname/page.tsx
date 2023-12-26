"use client";

import { useState } from 'react';
import Image from "next/image"
import Link from "next/link"
export default function Lists() {

  var [step, setStep] = useState(0);

  var names = ['pink panther', 'miku', 'anya','captian hardlock','Pengweno','Honda','Vegeta'];
  var pictures = ['/pink.gif','/cry_miku.jpg', '/anya.png','/hardlock.jpg','/Penguin_bongos.gif','/honda.jpg','/vegeta.jpg'];

  var currentName:string = names[step];
  var currentPicture:string = pictures[step];

  var handleNext = () => {
    setStep((prevStep) => (prevStep < names.length - 1 ? prevStep + 1 : prevStep));
  };

  var handleBack = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };


  return ( <>
       <div id="wrapper">
  <header id="header">
        <div className="inner">
           
          {/* Logo */}
          <Link href="/" className="logo">
            <span className="symbol">
              <Image 
              width={500}
              height={500}
              src="images/logo.svg" alt="" />
            </span>
            <span className="title">Back</span>
          </Link> 
          </div>
      </header>
      <div id="main">
       
      <div className="inner">
    
      <h2>Most Wanted</h2>
      <ul className="actions fit">
            <li>
                <button className="button primary" onClick={handleBack}><span>Back </span></button>
             </li>
            <li>
              <p className="button fit">
              {currentName}
              </p>
            </li>
            <li>
                 <button className="button primary" onClick={handleNext}><span>Next</span></button>
            </li>
          </ul>

 
      <div className="box alt">
            <div className="row gtr-uniform">     

              <div className="col-4">
                <span className="image fit">
                  <Image 
                  width={500}
                  height={500}
                  src="/images/pic01.jpg" alt="" />
                </span>
      
</div>


              <div className="col-4">
                <span className="image fit">  
            <Image
            width={500}
            height={500}
                    src={currentPicture}
                    alt={currentName}/>
                  
                </span>
              </div>    
              
                
              <div className="col-4">
                <span className="image fit">
                  <Image
                  width={500}
                  height={500}
                   src="/images/pic02.jpg" alt="" />
                </span>
              </div>  
              
              </div>
</div>
</div>
   
 </div>
  </div>
 

     </>
    

  )
}