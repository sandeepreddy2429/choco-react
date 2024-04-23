 import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
 
 export default function Contact() {
 let emailRef = useRef();
 let pwdRef = useRef();
 let navigate = useNavigate();
 const loginApi = async ()=>{
  let data ={
    "email": emailRef.current.value,
    "password":pwdRef.current.value,
  }
  let res = await fetch("https://reqres.in/api/login",{method:"POST",body:JSON.stringify(data),
           headers:{"content-type":"application/JSON"}
          });
          let jsonRes = await res.json();
          if(res.ok){
            localStorage.setItem("token",jsonRes['token'])
             navigate("/home")
            
          }
          else{
           alert(jsonRes['error']);

          }
         
 }
 

   return (
     <>
 
 
     <section  className="contact_section layout_padding">
      <div  className="container-fluid">
        <div  className="row">
          <div  className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
            <div  className="form_container">
            
                <h2>
               LogIn
                </h2>
              
        
              <div>
                  <input type="email" placeholder=" Enter Email" ref={emailRef} />
                </div>
                <div>
                  <input type="passward" placeholder="Enter Passward" ref={pwdRef} />
                </div>
               
                 
                <div  className="d-flex ">
                  <button onClick={()=>loginApi()}>
                Click For Login
                  </button>
                </div>
              
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
 