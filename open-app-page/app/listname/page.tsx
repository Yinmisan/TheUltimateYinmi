"use client";

import { useState } from 'react';


export default function lists() {

  var [step, setStep] = useState(0);

  var names = ['pink panther', 'miku', 'anya','captian hardlock','Pengweno','Honda','Vegeta'];
  var pictures = ['pink.gif','cry_miku.jpg', 'anya.png','hardlock.jpg','Penguin_bongos.gif','honda.jpg','vegeta.jpg'];

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
          <a href="/" className="logo">
            <span className="symbol">
              <img src="images/logo.svg" alt="" />
            </span>
            <span className="title">Main</span>
          </a> 
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
              <a className="button fit">
              {currentName}
              </a>
            </li>
            <li>
                 <button className="button primary" onClick={handleNext}><span>Next</span></button>
            </li>
          </ul>

 
      <div className="box alt">
            <div className="row gtr-uniform">     

              <div className="col-4">
                <span className="image fit">
                  <img src="images/pic01.jpg" alt="" />
                </span>
      
</div>


              <div className="col-4">
                <span className="image fit">  
 <img
      src={currentPicture}
      alt={currentName}/>
                  
                </span>
              </div>    
              
                
              <div className="col-4">
                <span className="image fit">
                  <img src="images/pic02.jpg" alt="" />
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
// style={{ width: '400px', height: '400px' }}