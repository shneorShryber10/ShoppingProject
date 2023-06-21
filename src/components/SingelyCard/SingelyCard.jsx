import { Link, useParams } from "react-router-dom";

import "./SingelyCard.css";
import React, { useState, createContext, useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../App";

export default function SingelyCard() {
  const params = useParams();
  
  const {
    countToBackground,setCountToBackground , finelStyle,setFinelStyle,
    data,
    setData,
    num,
    setNum,
    NameProductsContainer,
    setNameProductsContainer,
    FinelProductsContainer,
    setFinelProductsContainer,
    exe,
    setExe,
  } = useContext(UserContext);
  
  
  const [singelProductsNum, setSingelProductsNum] = useState(0);
  
  const notify = () => {toast.warning("Must select a product")}
  const notify2 = () => {toast.warning("Product successfully added")}
  
  
  
  
  const singlecard = data.find((e) => e.name === params.name);


  useEffect(()=>{
    
    singlecard.views+=1;
    setData(data)
   
   
  },[])


  function add() {
    setSingelProductsNum(singelProductsNum + 1);
  }
  function lass() {
    setSingelProductsNum(singelProductsNum - 1);
  }
  function addShope() {
    if(singelProductsNum<0)
    {
      notify()
    }else{
      notify2()
      
      let newFinel = exe.find((e) => e.name == singlecard.name);
      
    if (newFinel == undefined) {
      newFinel = [...exe,
        {
          name: singlecard.name,
          num: singelProductsNum,
          img: singlecard.img,
          price: singlecard.price,
          totalPrice: singlecard.price * singelProductsNum,
          category: singlecard.categpry,
        },
      ];
    } else {
      newFinel = exe.map((e, i) => {
        if (e.name == singlecard.name) {
          e.num += singelProductsNum; 
          e.totalPrice += singelProductsNum * singlecard.price;
        }
        return e;
      });
    }
    
    setExe(newFinel);
    setNum(num + singelProductsNum);
    setSingelProductsNum(0);

  }
    
  }

  return (
    <div className="singel-card-container" style={{background:`${finelStyle[countToBackground].background}`}}>
      <ToastContainer />
      <div>
        <h1>{singlecard.name}</h1>
        <img src={singlecard.img} alt="" />
      </div>
      <div>
        <div className="add-product">
          <button onClick={add}>+</button>
          <strong>{singelProductsNum}</strong>
          <button onClick={lass}>-</button>
        </div>
        <div className="add-to-wagon">
          <button onClick={addShope}>Add to cart</button>
        </div>
        <h4>Descrotion</h4>
        <div className="singel-card-lorem">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          est magni assumenda quo? Expedita et pariatur a, repellat non
          quisquam? Perspiciatis sint alias et soluta sed, eos deleniti
          cupiditate qui?
        </div>
      </div>
    </div>
  );
}
