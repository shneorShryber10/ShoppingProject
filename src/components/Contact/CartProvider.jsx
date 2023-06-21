import React,{ createContext, useContext, useState } from "react"


const CartContext = createContext();

export function CartProvider({children}){
    const[num,setNum]=useState(0);
    const[FinelProductsContainer,setFinelProductsContainer]=useState([]);
    const[exe,setExe]=useState([]);
    
    const[NameProductsContainer,setNameProductsContainer]=useState([]);
    const[ImgProductsContainer,setImgProductsContainer]=useState([]);

    return <CartContext.Provider value={{num,setNum,NameProductsContainer,setNameProductsContainer,ImgProductsContainer,setImgProductsContainer,FinelProductsContainer,setFinelProductsContainer,exe,setExe}}>{children}</CartContext.Provider>
}

export function useCart() {
    return useContext(CartContext);
}