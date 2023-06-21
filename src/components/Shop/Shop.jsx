import React, { useState, createContext, useContext, useEffect } from "react";
import { UserContext } from "../../App";
import "./Shop.css"
import data from "../Json/store.json"
import Card from '../Card/Card'



export default function Shop() {

  const[inputVal,setInputVal]=useState("");
  const[categoryVal,setategoryVal]=useState("");

  const { countToBackground,setCountToBackground , finelStyle,setFinelStyle,data, num, setNum, exe, setExe } = useContext(UserContext);

  let dataAftercategoryValSelaction=data.filter((e)=>{return e.categpry.startsWith(categoryVal)})
  let newData = dataAftercategoryValSelaction.filter((e)=>{return e.name.startsWith(inputVal)})



  
  return (

    <div className="Shop-all-page" style={{width:'100%',height:'200vh', background:`${finelStyle[countToBackground].background}`}}>
{<br/>}
{<br/>}
    <div className='card-container' >

<div className='filters'>

<div className='input-filter'>
  <label htmlFor="">Search for a product : </label><br></br>
   <input type="text" onChange={(e)=> setInputVal(e.target.value)}/>
</div>

<div>
  <label htmlFor="">Search by caregory: </label><br />
  <select name="" id="" onChange={(e)=>setategoryVal(e.target.value)}>
    <option value="">all</option>
  <option value="electricity">electricity</option>
  <option value="decor">decor</option>
  <option value="furniture">furniture</option>
   
   
  </select>
</div>
</div>

        {newData.map((e,i)=>{return  <Card  singelCardData={e} key={i}/>})}
    </div>
    </div>
  )
}
