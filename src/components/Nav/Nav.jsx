import "./Nav.css"
import { FaShoppingCart} from "react-icons/fa";
import { BsCalculatorFill} from "react-icons/bs";

import { FcShop} from "react-icons/fc";
import { BsArrowRightShort} from "react-icons/bs";
import { MdOutlineCreate} from "react-icons/md";
import { Link,useNavigate } from 'react-router-dom';
import React , { useState, createContext, useContext } from "react";
import { UserContext } from "../../App";
import logo from "./WhatsApp Image 2022-12-25 at 20.59.06.jpeg"



export default function Nav() {

 
  const {numOfColor,setNumOfColor,countToBackground,setCountToBackground,finelStyle,setFinelStyle,num,exe,data} = useContext(UserContext)

  let navigate = useNavigate();



  

  function changeBackground()
  {
    if(countToBackground<numOfColor){


      setCountToBackground(countToBackground+1);
    }
    else{
      setCountToBackground(0)
    }
  }
  

  
  return (
<div className="all-nav"   style={{background:`${finelStyle[countToBackground].navBackground}`}} >

      <div><Link to={'/'} style={{ textDecoration: 'none',color:"black"}}><img src={logo} alt="" /></Link></div>
    <div className='nav-container'>

      
        <ul className='main-nav'>
            <li><Link to={'/'} style={{paddingLeft: 13, textDecoration: 'none',color:"black"  }}>{<div className="link-box"><h3>Home</h3></div>}</Link></li>
            <li><Link to={'About'} style={{paddingLeft: 13, textDecoration: 'none',color:"black"}}>{<div className="link-box"><h3>About</h3></div>}</Link></li>
            <li><Link to={'Shop'} style={{paddingLeft: 13, textDecoration: 'none',color:"black"}}>{<div className="link-box"><h3>Shop</h3></div>}</Link></li>
        </ul>
        <ul className="UserPool">
         
        
         <li>
          <a href="https://rad-manatee-3d25e3.netlify.app/">
            <BsCalculatorFill className="FaShoppingCart" size={40} color="black" />
          </a>
         </li>
         <li><Link to={"UserPool"}><FaShoppingCart className="FaShoppingCart" size={40} color={'black'}/></Link></li>
           <li><div className="num-of-type-product"> {exe.length} </div></li>
         
          
           <li><div className="change-background">
             <div className="change-disign"><BsArrowRightShort size={40} onClick={changeBackground} cursor={"pointer"} /></div>   
              <Link to={'add'} style={{textDecoration: 'none',color:"black"  }}> <div className="to-disign"><MdOutlineCreate size={25} cursor={"pointer"} /></div></Link>
           </div></li>
        </ul>
    </div>
</div>
  )
}
