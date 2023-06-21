import React, { useState, createContext, useContext, useEffect } from "react";
import "./Home.css";
import homeImg from "./WhatsApp Image 2022-12-27 at 12.49.34.jpeg";
import { UserContext } from "../../App";
import Card from "../Card/Card";
import { FcShop } from "react-icons/fc";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const { countToBackground,setCountToBackground , finelStyle,setFinelStyle,data, num, setNum, exe, setExe } = useContext(UserContext);
  const [numofMostPopular, setNumofMostPopular] = useState(0);

  let newData = [...data];

  let arrarOfViews = newData.sort((a, b) => b.views - a.views);

  let arrayOfTreePoupolarProduct = [];

  for (let i = 0; i < 3; i++) {
    arrayOfTreePoupolarProduct[i] = arrarOfViews[i];
  }

  console.log(arrayOfTreePoupolarProduct);

  return (
    <div className="all-page-container" style={{background:`${finelStyle[countToBackground].background}`}} >
     
      <div className="container">
        <img src={homeImg} alt="" />

        

        <div className="lorem">
         
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia rerum
          perferendis esse atque., ad quam voluptas eius aspernatur fugit illum
          sequi velit veniam in sed cumque minus veritatis? Necessitatibus,
          blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident, ea veritatis consectetur aut soluta officiis eaque,
          repudiandae porro nobis beatae facere dolorum laboriosam. Vitae
          obcaecati facilis pariatur quos alias quia. sequi velit veniam in sed
          cumque minus veritatis? Necessitatibus, blanditiis. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Provident, ea veritatis
          consectetur aut soluta officiis eaque, repudiandae porro nobis beatae
          facere dolorum laboriosam. Vitae obcaecati facilis pariatur quos alias
          quia.
        </div>
      </div>

      <h1> Top Pupular</h1>
      <div className="most-popolar">
  {arrayOfTreePoupolarProduct.map((e, i) => {
  if (e.views > 0) {
    return (
      <div className="singel-popular-card" data-aos="fade-up">
        <h2>{i + 1}</h2>
        <Card singelCardData={e} key={i} />
      </div>
    );
  }
})}
</div> 
    
    </div>
  );
}

