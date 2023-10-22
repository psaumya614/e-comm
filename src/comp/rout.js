import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home";
import Shop from "./shop";
import Cart from "./cart";
import Contact from "./contact";

function Rout({shop, Filter, AllItem, addtocart, cart, setCart}){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home addtocart={addtocart} />} />  
                <Route path="/shop" element={<Shop shop={shop} Filter={Filter} AllItem={AllItem} addtocart={addtocart}/>} />
                <Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>}/>  
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default Rout;