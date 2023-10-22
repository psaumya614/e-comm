import React from 'react'
import {MdLocalShipping} from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'
import {BiLogInCircle} from 'react-icons/bi'
import {BiLogOutCircle} from 'react-icons/bi'
import {GrUserNew} from "react-icons/gr"
import './nav.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'


function Nav ({search, setSearch, searchproduct}) {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  

  return (
    <>
        <div className='header'>
            <div className='top_header'>
                <div className='icon'>
                <MdLocalShipping />
                </div>

                <div className='info'>
                    <p>Free Shipping On Order Above RS.599</p>

                </div>
               
                
            </div>
            <div className='mid_header'>
              <div className='logo'>
                  <span>
                    SPAB
                  </span>
              
            </div>
            <div className='search_box'>
                  <input type='text' value={search} placeholder='search ' onChange={(e)=>setSearch(e.target.value)}></input>
                  <button onClick={searchproduct}><BiSearch /></button>
                </div>

              {
                isAuthenticated ?
                // Logout
                <div className='user'>
                  <div className='icon'>
                  < BiLogOutCircle/>
                  </div >
                <div className='btn'>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                </div>

                </div>

              :
                // Login 
              <div className='user'>
                <div className='icon'>
                <BiLogInCircle />

                </div >
              <div className='btn'>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>

            

              </div>
          
          
                

              }

            </div>
            <div className='last_header'>
                <div className='user_profile'>
                  {
                    isAuthenticated ?
                    <>
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                    </>
                    :

                    <>
                      <div className='icon'>
                        <GrUserNew/>
                      </div>
                      <div className='info'>
                        <p>Welcome to SPAB</p>
                      </div>
                    </>
                  }
                </div>
                <br/>
                <br/>
                <div className='nav'>
                  <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/shop' className='link'>Shop</Link></li>
                    <li><Link to='/cart' className='link'>Cart</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><Link to='/contact' className='link'>Contact</Link></li>

                  </ul>
                </div>
                <div className='offer'>
                  <p>
                  Flat 10% over all product
                  </p>
                </div>
              </div>
            </div>
    </>
  )
}

export default Nav;