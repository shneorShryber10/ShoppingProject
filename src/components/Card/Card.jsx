import React,{useEffect} from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card({singelCardData}) {

  useEffect(()=>{

    AOS.init();

},[])

  return (

    <Link to={`/${singelCardData.name}`}><div className='singel-card' data-aos="flip-left">
      
        <div className='d'>
        <h5 style={{display: "flex", justifyContent:"center",alignItems:"center"}}> {singelCardData.name}</h5>
        <h5 style={{display: "flex", justifyContent:"center",alignItems:"center"}}> price : {singelCardData.price}</h5>
        </div>
        <img src={singelCardData.img} alt="" />
    </div></Link>
  )
}
