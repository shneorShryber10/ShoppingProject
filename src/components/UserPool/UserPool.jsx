import React , { useState, createContext, useContext, useEffect } from "react";
import { UserContext } from "../../App";
import "./UserPool.css"
 import {BsTrash} from "react-icons/bs"; 
 import {BiPlus} from "react-icons/bi"; 
 import {BiMinus} from "react-icons/bi"; 
 import {TiDelete} from "react-icons/ti"; 
import { clear } from "@testing-library/user-event/dist/clear";



export default function UserPool() {
  const {countToBackground,setCountToBackground , finelStyle,setFinelStyle,num,setNum,exe,setExe} = useContext(UserContext)
  

const[finelTotalPrice,setFinelTotalPrice]=useState(0);
const[massege,setMassege]=useState("");

let countPrice=0;
exe.map((e)=>
{
  countPrice+=e.totalPrice;
})



  function Clear()
  { 
    setExe([])
    setNum(0);
  }
   
  function buyMassege()
  {
    setMassege("Not allowed at the moment")
   
  }
  function clearOneSingelyProduct(e)
  {
 
    let res=exe.filter((product) => product.name !== e.name)   
    setNum(num-e.num);
      setExe(res)
  }
function adding(e){
  
  let index = exe.findIndex((d)=>d.name == e.name);
let updateExe = [...exe]
updateExe[index].num += 1;
updateExe[index].totalPrice +=updateExe[index].price
  setExe(updateExe)
  setNum(num+1)

  
  }
  function lassing(e){
    
    let index = exe.findIndex((d)=>d.name == e.name);
    let updateExe = [...exe];
    if(updateExe[index].num > 1){
      updateExe[index].num -= 1;
      updateExe[index].totalPrice -=updateExe[index].price
      setNum(num-1)
      setExe(updateExe)
    }
    else{
      clearOneSingelyProduct(e)
    }
  }
  return (

<div className="UserPool-all-page" style={{background:`${finelStyle[countToBackground].background}`}}>


    <div className="Pool-container">
     
     <div className="Summary">

          <p>Summary</p>
      <div className="num-of-product">items({num}) <span>{countPrice}$</span></div>
      <div className="num-of-product" >Shipping : <span style={{color:"red"}}>Free</span></div>
      <button className="css-butoon" onClick={Clear}>Clear</button>
      <button  className="css-butoon" onClick={buyMassege}>Buy Now</button>
      <div className="massege"> {massege ? <div> <button onClick={()=>setMassege(null)} style={{border:"none" ,background:"none",color:"black",marginRight:"5px"}}><TiDelete size={25} color={"gray"}/></button>{massege}</div> : null} </div>

     </div>

      <div className="Products-so-far">

      {exe.map((e,i)=>{ 
        
        
        return <div className="display-pool"  key={i}>
          

       <div ><BsTrash onClick={()=>clearOneSingelyProduct(e)} size={30} color={"red"} cursor={"pointer"}/></div>
          <div><h6>{e.name}</h6> </div>
          <h6>x{e.num}</h6>


          <div className="display-the-product">

            <BiMinus  className="plus-lass-icon"onClick={()=>lassing(e)} size={30}  cursor={"pointer"} />
              <div>

              <div className="singel-img"><img src={e.img} alt="" /></div>
              category: <h6>{e.category}</h6>
              </div>
              <BiPlus className="plus-lass-icon" onClick={()=>adding(e)} size={30}  cursor={"pointer"} />
          
          </div>

          <div className="singely-TotalPrice"><h5>{e.totalPrice}$</h5> </div> 
       
        </div>
        
      })}
      </div>
      </div>
        </div>
  )
}
