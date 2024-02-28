import React from 'react';
import './header.css';


const Header = () => {
    return (
        <div>
        <header className="header">
            <div className="hedear-top">
               <div className="header-top-menu">
                  <i class="bi bi-list"></i>
               </div>
               <div className="hedear-top-phone">
               <i class="bi bi-telephone-fill"></i>
                  +212 6 17 03 94 12
               </div>
               <div className="hedear-top-text">
                  Welcomme To Online Store
               </div>
               <div className="hedear-top-link">
                  <i class="bi bi-person-fill"></i>
                  Login
               </div>

            </div>


        </header>
            
        </div>
    );
}

export default Header;
