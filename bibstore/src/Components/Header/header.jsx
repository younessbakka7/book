import React from 'react';
import './header.css';
import HeaderTop from '../HeaderTop';
import HeaderMiddle from '../HeaderMiddle';


const Header = () => {
    return (
        <div>
       <header className="header">
          

        <HeaderTop/>
        <HeaderMiddle/>


        </header>

       
            
        </div>
    );
}

export default Header;
