import React from 'react'
import './footer.css'
import {FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon-box'>
                        <FaPiggyBank/>
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Grab your deal now</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon-box'>
                        <FaShippingFast/>
                    </div>
                    <div className='detail'>
                        <h3>Free delivery</h3>
                        <p>Grab your deal now</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon-box'>
                        <FaHeadphonesAlt/>
                    </div>
                    <div className='detail'>
                        <h3>24/7 Support</h3>
                        <p>Grab your deal now</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon-box'>
                        <FaWallet/>
                    </div>
                    <div className='detail'>
                        <h3>Money back</h3>
                        <p>Grab your deal now</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                    <h2>SPAB STORE</h2>
                    <p>Grab the best deal with us Life is short buy a headphone</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Order</li>
                            <li>New Product</li>
                            <li>Old Product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>Contact Us</h3>
                        <ul>
                            <li>1st cross, ramaswamy layout, electronic city, bangalore</li>
                            <li>+918318534053</li>
                            <li>info@spab.com</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;