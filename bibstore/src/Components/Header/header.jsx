import React from 'react';
import './header.css';
import HeaderTop from '../HeaderTop';
import HeaderMiddle from '../HeaderMiddle';
import Navbar from './Navbar';
import { useState } from 'react';
import Slider from '../slide/Slider';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
       <header className="header">
          

        <HeaderTop setToggle={setToggle}/>
        <HeaderMiddle/>
   
        <Navbar toggle={toggle} setToggle={setToggle}  />

        </header>
        <Slider/>
    

       
            
        </div>
    );
}

export default Header;
