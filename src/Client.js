import React, { useEffect } from 'react'
import { useState } from 'react';
import Header from './Header';
 
export default function Client() {
      
  const [userList,setUserList] = useState([]);
  const getApi = async (pageNo)=>{
    let res = await fetch("https://reqres.in/api/users?page=" + pageNo, {method: "GET"});
  let jsonRes = await res.json();
  setUserList(jsonRes['data']);
  }
  useEffect(()=>{
    getApi(1);
  },[])
  const changePageNo=(obj)=>{
    getApi(obj.target.value);
  }
  return (
   <>
 <Header/>
   <h2>
    Select pageNo
   </h2>
   <select onChange={(e)=>changePageNo(e)}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
   </select>
    {userList.length == 0? <h1> NO USER FOUND</h1>:""}

 {/* <button onClick={()=>getApi()}>click to get users</button> */}
 {
  userList.map((obj,index)=>{
    return (
      <div key={index}>
        <div>
        <img src={obj.avatar} alt=""/>
        </div>
        <div>
          <h5>
            {obj.first_name}
          </h5>
        </div>
      </div>
    )
    
  })
  
 }
 




            
 
 
</>
  )
}
