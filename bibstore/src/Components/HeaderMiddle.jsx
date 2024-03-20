import React from 'react';

import {Link} from "react-router-dom"

const HeaderMiddle = () => {
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
          <i className="bi bi-cart2"></i>
        </Link>
       


      </div>
    );
}

export default HeaderMiddle;
