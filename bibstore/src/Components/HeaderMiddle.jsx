import React from 'react';
import {useContext} from 'react';

import {Link} from "react-router-dom"

//notification

import cartcontext from '../context/cartcontext'

const HeaderMiddle = () => {
  const { itemlenght } = useContext(cartcontext);
    return (
        <div className="hedear-middel">

        <Link to={"/"} className="hedear-middel-logo">
          <b>Book</b>  
          <i class="bi bi-book"></i>
          <b>Store</b>
        </Link>


        <div className="hedear-middel-search-box">
         <input className='hedear-middel-search-input' type="search"  placeholder='Search book...' />
           <i className="bi bi-search"></i>
         

        </div>


        <Link to={"/cart"} className="hedear-middel-cart-car-wrapper">
          {itemlenght>0 &&
          <b className='notification'>{itemlenght}</b>
          }
          
          <i className="bi bi-cart2"></i>
        </Link>
       


      </div>
    );
}

export default HeaderMiddle;
