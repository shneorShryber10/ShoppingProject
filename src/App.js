import Home from "./components/Home/Home";
import { Route,Routes } from 'react-router-dom';
import Nav from "./components/Nav/Nav";
import store from "./components/Json/store.json";
import 'bootstrap/dist/css/bootstrap.css';
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import UserPool from "./components/UserPool/UserPool";
import SingelyCard from "./components/SingelyCard/SingelyCard";

import { useState, createContext, useContext } from "react";
import AddBacground from "./components/AddBacground/AddBacground";



export const UserContext = createContext();

function App() {


  const[num,setNum]=useState(0);
  const[FinelProductsContainer,setFinelProductsContainer]=useState([]);
  const[exe,setExe]=useState([]);

  const[data,setData]=useState(store.map((e)=>{return {...e,views:0} }));
  
  const[NameProductsContainer,setNameProductsContainer]=useState([]);
  const[ImgProductsContainer,setImgProductsContainer]=useState([]);
  const[countToBackground,setCountToBackground]=useState(0);

  const[numOfColor,setNumOfColor]=useState(3);

  
  

  let backgroundArray=[ 
    {
      name:"antiquewhite",
      background:"antiquewhite",
       navBackground:"#c79655",
    },
    {
      name:"blue",
      background:"#80f0f6",
       navBackground:"#00bdff",
    },
    {
      name:"red",
      background:"#fad7d7",
        navBackground:"#c75757",
    },
    {
      name:"gray",
      background:"rgb(227 221 221)",
       navBackground:"gray",
    }
    ,

  ]
  
  const[finelStyle,setFinelStyle]=useState(backgroundArray);


  
  return (
    <div >
    
        <UserContext.Provider value={{numOfColor,setNumOfColor,countToBackground,setCountToBackground,finelStyle,setFinelStyle,data,setData,num,setNum,NameProductsContainer,setNameProductsContainer,ImgProductsContainer,setImgProductsContainer,FinelProductsContainer,setFinelProductsContainer,exe,setExe}} >
          <Nav  />  

   <Routes>
    <Route path='/' element={<Home/>} ></Route>
    <Route path='/About' element={<About/>} ></Route>
    <Route path='/Shop' element={<Shop/>} ></Route>
    <Route path='/:name' element={<SingelyCard/>} ></Route>
    <Route path='/UserPool' element={<UserPool/>} ></Route>
    <Route path='/add' element={<AddBacground/>} ></Route>
    </Routes>
        </UserContext.Provider> 
    </div>
  );
}

export default App;
