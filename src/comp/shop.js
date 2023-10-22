import React, { useState } from 'react'
import './shop.css'
import {AiFillHeart, AiFillEye, AiOutlineClose} from 'react-icons/ai'

const Shop = ({shop, Filter, AllItem, addtocart}) => {
    const [showDetail, setshowDetail] = useState(false)

    const [detail, setDetail] = useState([])

    const detailpage = (product) =>
    {
        const detaildata = ([{product}])
       const productdetail = detaildata[0]['product']
       setDetail(productdetail)
        setshowDetail(true)
    }

    const closedetail = () =>
    {
        setshowDetail(false)
    }
  return (
    <>
    {
        showDetail ?
        <>
            <div className='product_detail'>
                <button className='close_btn' onClick={closedetail}><AiOutlineClose/></button>
                <div className='container'>
                    <div className='img_box'>
                        <img src={detail.img}></img>
                    </div>
                    <div className='info'>
                        <h4>{detail.cat}</h4>
                        <h2>{detail.Name}</h2>
                        <p>Let the happiness come into your house.<br/> 
                        Life is short buy this product now.
                        </p>
                        <h3>Rs.{detail.price}</h3>
                        <button onClick={()=> addtocart(detail)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
        :null
    }

    <div className='shop'>
        <h2># shop</h2>
        <p>Home . shop</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3 onClick={()=>AllItem()}>all category</h3>
                    </div>
                    <div className='box'>
                        <ul>
                        
                            <li onClick={()=>Filter('blacktshirt')}># tshirt</li>
                            <li onClick={()=>Filter('bluetshirt')}># bluetshirt</li>
                            <li onClick={()=>Filter('redtshirt')}># redtshirt</li>
                            <li onClick={()=>Filter('headphone')}># headphone</li>
                            <li onClick={()=>Filter('earbud')}> # earbud</li>
                            <li onClick={()=>Filter('pocco')}># pocco</li>
                            <li onClick={()=>Filter('iphone')}># iphone</li>
                            <li onClick={()=>Filter('samsung')}># samsung</li>
                            <li onClick={()=>Filter('motorolla')}># motorolla</li>
                        </ul>
                    </div>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='banner/rightbanner.jpg' />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='right_box'>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='banner/shopbanner.jpg' />
                        </div>
                    </div>
                    <div className='product_box'>
                        <h2>Shop Product</h2>
                        <div className='product_container'>
                            {
                                shop.map((curElm) =>
                                {
                                    return(
                                        <>
                                            <div className='box'>
                                                <div className='img_box'>
                                                    <img src={curElm.img} />
                                                    <div className='icon'>
                                                       <li> <AiFillHeart/></li>
                                                        <li onClick={()=> detailpage(curElm)}><AiFillEye /></li>
                                                    </div>
                                                </div>
                                                <div className='detail'>
                                                        <h3>{curElm.Name}</h3>
                                                        <p>{curElm.price}</p>
                                                        <button onClick={()=> addtocart(curElm)}>Add To Cart</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
        </div>
    </div>  
    </>
  )
}

export default Shop