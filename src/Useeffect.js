import React, { useEffect, useRef, useState } from 'react'
 
 
 import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function Useeffect() {
  let navigate = useNavigate()
  let emailRef = useRef();
  const [email,setEmail] = useState('');
  const updateState=()=>{
    let emailval = emailRef.current.value
    setEmail(emailval);
  }
  useEffect(()=>{
    console.log("email useEfect --",email);
  },[email])
  navigate('/login')
  return (
    
    
    <>
     <Header/>
 
     <section  className="contact_section layout_padding">
      <div  className="container-fluid">
        <div  className="row">
          <div  className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
            <div  className="form_container">
    
              <div>
                  <input ref={emailRef} type="email" placeholder=" Enter Anything" />
                </div>

         
            </div>
            <div>
              <button onClick={()=>updateState()}>SEND</button>
            </div>
          </div>
         
          <div  className="col-md-6  px-0">
            <div  className="map_container">
              <div  className="map">
                <div id="googleMap"></div>
              </div>
            </div>
     
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
