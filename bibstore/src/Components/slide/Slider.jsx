import React from 'react';
import "./Slider.css"
import FirstImg from "../../images/book1.png"
import SecImg from "../../images/book2.png"
import TherdImg from "../../images/book3.png"
import { useState } from 'react';


const Slider = () => {
    const [Slideindex, setSlideindex] = useState(0);


    const Handlclick = (direction)=>{
        if(direction === "left"){
            setSlideindex(Slideindex - 1)

        }else{
            setSlideindex(Slideindex + 1)
        }
        
    }
    return (
        <div  className="slide-container">
          {Slideindex !== 0 &&  <i onClick={() => {Handlclick("left")}} class="bi bi-chevron-double-left chev-left"></i>} 
        
          
          <div style={{transform :`translateX(${Slideindex * -100}vw)`}} className="slide-wraper">  {/*transletX t7rik lyamin awe yassar 3la hassab l9ima lifih (9ima)*/}
         
                <div className="slide  first-slide">
                    <div className="slide-img-wraper">
                        <img src={FirstImg} alt="" />
                    </div>
                    <div className="slide-info-wraper">
                   <h1 className="slide-wraper-title">Book</h1>
                   <p className="slide-wraper-desc">Book Store</p>
                    </div>
                </div>

                <div className="slide  seconde-slide">
                    <div className="slide-img-wraper">
                        <img src={SecImg} alt="" />
                    </div>
                    <div className="slide-info-wraper">
                   <h1 className="slide-wraper-title">Book</h1>
                   <p className="slide-wraper-desc">Best Of #bookTook</p>
                    </div>
                </div>
               
                <div className="slide  thred-slide">
                    <div className="slide-img-wraper">
                        <img src={TherdImg} alt="" />
                    </div>
                    <div className="slide-info-wraper">
                   <h1 className="slide-wraper-title">Book</h1>
                   <p className="slide-wraper-desc">Tales of the City</p>
                    </div>
                </div>
            </div>
            {Slideindex !== 2 && <i onClick={() => {Handlclick("right")}} class="bi bi-chevron-double-right chev-right"></i>}
            
            


        </div>
       
            
      
    );
}

export default Slider;


