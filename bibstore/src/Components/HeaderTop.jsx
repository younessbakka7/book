import React from 'react';
import {Link} from "react-router-dom"
const HeaderTop = ({setToggle,toggle}) => {
    return (
        <div className="hedear-top">
               <div onClick={()=>setToggle(prev => !prev)} className="header-top-menu">
                  { toggle ? <i class="bi bi-x-lg"></i> : <i class="bi bi-list"></i> }
                  
               </div>
               <div className="hedear-top-phone">
               <i class="bi bi-telephone-fill"></i>
                  +212 6 17 03 94 18
               </div>
               <div className="hedear-top-text">
                  Welcomme To Online Store
               </div>
               <Link to={"/login"} className="hedear-top-link">
                  <i class="bi bi-person-fill"></i>
                  Login
               </Link>

            </div>
    );
}

export default HeaderTop;
