
import React, { useState, createContext, useContext, useEffect } from "react";
import "./About.css"
import { UserContext } from "../../App";

export default function About() {

  const { countToBackground,setCountToBackground , finelStyle,setFinelStyle,data, num, setNum, exe, setExe } = useContext(UserContext);

  return (
    <div className="all-page-container" style={{background:`${finelStyle[countToBackground].background}`}}>
         <div className="About-lorem">
          <h6>
            <br />
            <br />
            <br />
            
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolorem doloremque consequuntur deleniti in, earum dolor
           um sapiente debitis, necessitatibus, consequatur autem e
           xplicabo facere suscipit recusandae vero illo facilis dicta maxime! Sequi?
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolorem doloremque consequuntur deleniti in, earum dolor
           um sapiente debitis, necessitatibus, consequatur autem e
           xplicabo facere suscipit recusandae vero illo facilis dicta maxime! Sequi?
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Dolorem doloremque consequuntur deleniti in, earum dolor
           um sapiente debitis, necessitatibus, consequatur autem e
           xplicabo facere suscipit recusandae vero illo facilis dicta maxime! Sequi?
          </h6>
         </div>
        </div>
  )
}
