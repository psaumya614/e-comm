import React from "react";
import './home.css';
import {Link} from 'react-router-dom';
import Homeproducts from "./home_products";
import { useState, useEffect } from "react";
import {AiFillEye, AiFillHeart, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiOutlineShoppingCart} from 'react-icons/ai';

function Home({addtocart}){

    const [newProduct, setNewProduct] = useState([])
    const [featuredProduct, setfeaturedProduct] = useState([])
    const [topProduct, setTopProduct] = useState([])

    const [trendingProduct, SetTrendingProduct] = useState(Homeproducts);

    const filtercate = (x) =>
    {
        const filterproduct = Homeproducts.filter((curElm)=> 
        {
            return curElm.type === x 
        }) 
        SetTrendingProduct(filterproduct)
        
    }

    function AllProducts(){
        SetTrendingProduct(Homeproducts);
    }

    useEffect(() =>
    {
        productcategory()
    })

    const productcategory = () =>
    {
        const newcategory = Homeproducts.filter((x) =>
        {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        const featuredProduct = Homeproducts.filter((x) =>{
            return x.type === 'headphone'
        })
        setfeaturedProduct(featuredProduct)

        const topProduct = Homeproducts.filter((x)=>
        {
            return x.type === 'mobile'
        })
        setTopProduct(topProduct)

    }

    return(
        <>
            <div className="home">
                <div className="top_banner">
                    <div className="contant">
                        <h3>Ultimate discount</h3>
                        <h2>Sale</h2>
                        <p>upto 50% off</p>
                        <Link to="/shop" className='btn'>Shop Now</Link>
                    </div>

                </div>

                <div className="trending">
                    <div className="container">
                        <div className="left_box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={()=> AllProducts()}> Products</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={()=> filtercate('new')}>clothes</h3>
                                    <h3 onClick={()=> filtercate('headphone')}>headphones</h3>
                                    <h3 onClick={()=> filtercate('mobile')}>Mobile/tab</h3>
                                </div>
                            </div>

                            <div className="products">
                                <div className="container">
                                
                                    {
                                       trendingProduct.map((curElm) =>
                                       {
                                        return(
                                            <>
                                            <div className="box">
                                                <div className="img_box">
                                                    <img src={curElm.img}></img>
                                                    <div className="icon">
                                                        <div className="icon_box">
                                                            <AiFillEye/>
                                                        </div>
                                                        <div className="icon_box">
                                                            <AiFillHeart/>
                                                        </div>
                                                    </div>
                                                 </div>
                                                 <div className="info">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>Rs.{curElm.price}</p>
                                                    <button className="btn" onClick={()=>addtocart(curElm)}>Add To Cart</button>
                                                 </div>
                                            </div>   
                                            
                                            </>
                                        )
                                        }) 
                                    }
                                    </div>
                                
                            </div>

                        </div>
                        <div className="right_box">
                            <div className="right_container">
                                <div className="testimonial">
                                    <div className="head">
                                        <h3>Our testimonial</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="img_box">
                                            <img src="banner/user2.jpg" />
                                        </div>
                                        <div className="info">
                                            <h3>peter parker</h3>
                                            <h4>Web developer</h4>
                                            <p>Products are really good, i am really happy with spab service also thank you guys.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                    
                            </div>
                            <div className="newsletter">
                                    <div className="head">
                                        <h3>newsletter</h3>
                                    </div>
                                        <div className="form">
                                            <p>join our mailling list</p>
                                            <input type="email" placeholder="E-Mail" autoComplete="off"></input>
                                            <button>Subscribe</button>
                                            <div className="icon_box">
                                                <div className="icon">
                                                <AiFillFacebook />
                                                </div>
                                                <div className="icon">
                                                <AiFillTwitterCircle />
                                                </div>
                                                <div className="icon">
                                                <AiFillInstagram />
                                                </div>

                                                <div className="icon">
                                                <AiFillLinkedin />
                                                </div>
                        
                                            </div>
                                        </div>
                                        
                                </div>
                            <div className="right_banner">
                                            <img src="banner/rightbanner.jpg" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="banners">
                    <div className="container">
                        <div className="left_box">
                            <div className="box">
                                <img className="img1" src="banner/5575670.jpg"/>
                            </div>
                            <div className="box">
                                <img className="img1" src="banner/banner3.jpg"/>
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="top">
                                <img src="banner/banner2.jpg"></img>
                            </div>
                            <div className="top">
                                <h1>“I'm not a <span>Shopaholic</span>, I'm helping the <span>Economy</span>.”</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_type">
                    <div className="container">
                        <div className="box">
                            <div className="header">
                                <h2>Fashion</h2>
                             </div>
                             {
                                newProduct.map((curElm) =>
                                {
                                    return(
                                        <>
                                        <div className="productbox">
                                            <div className="img-box">
                                                <img src={curElm.img} ></img>
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>Rs.{curElm.price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye/></button>
                                                    <button><AiFillHeart/></button>
                                                    <button onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart/></button>
                                                </div>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                             }
                        
                        </div>
                        <div className="box">
                            <div className="header">
                                <h2>Headphones</h2>
                             </div>
                             {
                                featuredProduct.map((curElm) =>
                                {
                                    return(
                                        <>
                                        <div className="productbox">
                                            <div className="img-box">
                                                <img src={curElm.img} ></img>
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>Rs.{curElm.price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye/></button>
                                                    <button><AiFillHeart/></button>
                                                    <button><AiOutlineShoppingCart/></button>
                                                </div>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                             }
                        
                        </div>
                        <div className="box">
                            <div className="header">
                                <h2>Mobile/ Tab</h2>
                             </div>
                             {
                                topProduct.map((curElm) =>
                                {
                                    return(
                                        <>
                                        <div className="productbox">
                                            <div className="img-box">
                                                <img src={curElm.img} ></img>
                                            </div>
                                            <div className="detail">
                                                <h3>{curElm.Name}</h3>
                                                <p>Rs.{curElm.price}</p>
                                                <div className="icon">
                                                    <button><AiFillEye/></button>
                                                    <button><AiFillHeart/></button>
                                                    <button><AiOutlineShoppingCart/></button>
                                                </div>
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
        </>
    )
}

export default Home;