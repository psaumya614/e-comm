import React from 'react'
import './cart.css'
import {Link} from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Cart = ({cart, setCart}) => {

    const incqty = (product)=>

    {
        const exist = cart.find((x)=>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>
        {
            return curElm.id=== product.id ? {...exist, qty: exist.qty+1}: curElm
        }))
    }

    const decqty = (product)=>

    {
        const exist = cart.find((x)=>
        {
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>
        {
            return curElm.id=== product.id ? {...exist, qty: exist.qty-1}: curElm
        }))
    }

   const removeproduct = (product) =>
   {
    const exist = cart.find((x)=>
    {
        return x.id === product.id
    })
    if(exist.qty > 0)
    {
        setCart(cart.filter((curElm) =>
        {
            return curElm.id !== product.id
        }))
    }
   }

   const Total = cart.reduce((price,item)=> price + item.qty* item.price,0)

  return (
    <>
        <div className='cart'>
            <h3>Cart</h3>
            {
                cart.length ===0 &&
                <>
                <div className='empty_cart'>
                    <h2>Your Shopping cart is empty </h2>
                    <Link to='/shop'><button>Shop Now</button></Link>
                    
                </div>
                </>
            }
            <div className='container'>
                {
                    cart.map((curElm)=>
                    {
                        return(
                            <>
                            <div className='box'>
                                <div className='img_box'>
                                    <img src={curElm.img} alt='img'></img>
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                    <h4>{curElm.cat}</h4>
                                    <h3>{curElm.Name}</h3>
                                    <p>Price: Rs.{curElm.price}</p>
                                    <p>Total: Rs{curElm.price*curElm.qty}</p>
                                    </div>
                                    
                                    <div className='quantity'>
                                        <button onClick={()=> incqty(curElm)}>+</button>
                                        <input type='' value={curElm.qty}></input>
                                        <button onClick={()=> decqty(curElm)}>-</button>
                                    </div>
                                   <div className='icon'>
                                    <li onClick={()=> removeproduct(curElm)}><AiOutlineCloseCircle/></li>
                                   </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='bottom'>
                {
                    cart.length >0 &&
                    <>
                        <div className='Total'>
                            <h4>Total: Rs.{Total}</h4>
                            <button>CheckOut</button>
                         </div>
                    </>
                }
                
            </div>
        </div>
    </>
  )
}

export default Cart;