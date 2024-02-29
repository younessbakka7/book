import React from 'react';

const HeaderMiddle = () => {
    return (
        <div className="hedear-middel">

        <div className="hedear-middel-logo">
          <b>Book</b>  
          <i class="bi bi-book"></i>
          <b>Store</b>
        </div>


        <div className="hedear-middel-search-box">
         <input className='hedear-middel-search-input' type="search"  placeholder='Search book...' />
           <i className="bi bi-search"></i>
         

        </div>


        <div className="hedear-middel-cart-car-wrapper">
          <i className="bi bi-cart2"></i>
        </div>
       


      </div>
    );
}

export default HeaderMiddle;
