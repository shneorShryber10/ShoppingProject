import "./AddBackground.css"
import React, { useState, createContext, useContext, useEffect } from "react";
import { UserContext } from "../../App";
import {TiDelete} from "react-icons/ti"; 
import blueImg from "./imges/WhatsApp Image 2022-12-29 at 14.27.05.jpeg"
import orengImg from "./imges/WhatsApp Image 2022-12-29 at 15.18.13.jpeg"
import redImg from "./imges/WhatsApp Image 2022-12-29 at 14.27.41.jpeg"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';





export default function AddBacground() {

    
    const {numOfColor,setNumOfColor,countToBackground,setCountToBackground , finelStyle,setFinelStyle,data, num, setNum, exe, setExe } = useContext(UserContext);

   
    const[navBackgroundChoose,setNavBackgroundChoose]=useState();
    const[backgroundChoose,setBackgroundChoose]=useState();

    const notify = () => {toast.warning("can't delete anymore")}
    const notify2 = () => {toast.warning("Choose different colors")}

  /*   const inputRef = useRef();
    const inputRefsecond = useRef(); */
    



        function addBackground()
        {
            if((finelStyle[0].navBackground==navBackgroundChoose && finelStyle[0].background== backgroundChoose)|| (!navBackgroundChoose|| !backgroundChoose))
            {
                notify2();
            }
            else{

                let addingToFinelStyle=[];
                addingToFinelStyle.push({name:"nweName",navBackground:`${navBackgroundChoose}`, background:`${backgroundChoose}`,})
                addingToFinelStyle=[...addingToFinelStyle,...finelStyle];
                
                console.log(addingToFinelStyle);
                
                setNumOfColor(numOfColor+1);
                setFinelStyle(addingToFinelStyle)
            }
        }

        function deleatOneDesign()
        {
            console.log(numOfColor);

            let oneLessArry;

            if(numOfColor>0)
            {
                oneLessArry= finelStyle.slice(1);
                setFinelStyle(oneLessArry)
                console.log(oneLessArry);

                setNumOfColor(numOfColor-1);
                setCountToBackground(0)
            }
            else
            {
                notify();
            }
        }
        function deleteByChoose(item){

            console.log(numOfColor);

            if(numOfColor>0){

                let oneLessArryByChoois;
                
                
                oneLessArryByChoois =finelStyle.filter((e)=>{
                    {return e.background!=item.background}
                })
                
                console.log(oneLessArryByChoois);
                setNumOfColor(numOfColor-1);
                setFinelStyle(oneLessArryByChoois);
                setCountToBackground(0)
            }
            else{
                notify();
            }

            
            }


            /* const focus =(e)=>{
                if(e.key === "Enter"){
                    inputRefsecond.current.focus();
                    
                }
            }
            const focusBack=(e)=>{
                if(e.key === "Enter"){
                    inputRef.current.focus();
                    
                }
            } */


  return (

    <div className='all-page-add' style={{background:`${finelStyle[countToBackground].background}`}}  >
           
            
            <div className='titel'>  <h1>Creat your own designs</h1> 
            <ToastContainer/>
            </div>

            <div className="exanple-titel"><h3>Design example</h3></div>
            <div className="Design-all">


          

    <div style={{width:"50%"}}>

    <MDBCarousel  showControls showIndicators dark fade  style={{width:"70%" , height:"100%" ,marginLeft:"30px",  borderRadius:"20%"}}>
      <MDBCarouselItem
      style={{ borderRadius:"10px"}}
      className='w-100 d-block'
      itemId={1}
      src={orengImg}
      alt='...'
      />
      <MDBCarouselItem
      style={{ borderRadius:"10px"}}
      className='w-100 d-block'
      itemId={2}
      src={redImg}
      alt='...'
      />
      <MDBCarouselItem
      style={{ borderRadius:"10px"}}
      className='w-100 d-block'
      itemId={3}
      src={blueImg}
        alt='...'
        
        />
    </MDBCarousel>
        </div>


        <div className="Design-background">
<label htmlFor=""> <strong> chose nav-Background</strong> : </label>    
<input type="color"  onChange={(e)=>setNavBackgroundChoose(e.target.value)} /* ref={inputRef} onKeyUp={focus}  */ />
<br />
        
<label htmlFor=""> <strong> chose Background :</strong> </label>
<input type="color" onChange={(e)=>setBackgroundChoose(e.target.value)}  /* ref={inputRefsecond} onKeyUp={focusBack}  */  />
<br />
<br />
<div className="addOneDesign-button" >
<button onClick={(e)=> addBackground(e.target.value)} >add a Design</button>
</div>
<br />
<br />

<div className="display-your-choose">

    <div className="TheNav" style={{background: navBackgroundChoose ? `${navBackgroundChoose}` : "white"}}>the nav</div>
    <div className="TheBackground" style={{background: backgroundChoose ?`${backgroundChoose}` : "white"}}>the body background</div>
     
</div>
<div className="current-designs">


<label htmlFor=""><h5>Current designs</h5></label>
<div className="display-cuur-colors">


{finelStyle.map((e,i)=>{
    
    return (
        
        <div key={i}>
            <div style={{background:`${e.navBackground}`,height:"30px",width:"90px",textAlign:"center"}}> <TiDelete cursor={"pointer"} onClick={()=>deleteByChoose(e)} />  nav</div>        
        <div style={{background:`${e.background}`,height:"40px",textAlign:"center"}}>body</div>
        </div>
        )
        
    })}
    </div>
 
 <br />
 <div className="deleatOneDesign-button">
<button onClick={deleatOneDesign} >deleat a Design</button>
 </div>
</div>
        

                  
        </div>
       
            </div>


    </div>
  )
}
