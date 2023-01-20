import React from "react";
import { useState } from "react";



export default function LocalStorage(){
  const [service,setService] = useState('')
  const [price,setPrice] = useState('')
   
  function SaveData(){
    const saves=JSON.parse(localStorage.getItem('menu') || '[]')
    const save = {
      service:service,
      price:price
    }
    saves.push(save)

  localStorage.setItem('menu',JSON.stringify(saves))
  }

return (
    <div > 
      <input type='text' placeholder="service" value={service} onChange={(e)=>{setService(e.target.value)}}/> 
      <br/>
      <input type='text' placholder="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
      <br/>
      <button onClick={SaveData}> save</button>
    </div>
)
}