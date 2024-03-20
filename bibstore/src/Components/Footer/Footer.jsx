import React from 'react';
import './Footer.css'
import {Link, link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
             <div className="footer-social-media">
                  <div className="footer-social-media-text">Follow Us</div>
                     <div className="footer-social-media-text-icons">
                     <div className="footer-social-media-icon">
                         <i style={{color:"red"}} class="bi bi-youtube "></i> 
                        </div>
                        <div className="footer-social-media-icon">
                         <i style={{color:"#2980b9"}} class="bi bi-facebook "></i> 
                        </div>
                        <div className="footer-social-media-icon">
                          <i style={{color:"red"}} class="bi bi-instagram "></i>
                        </div>
                        <div className="footer-social-media-icon">
                          <i  style={{color:"skyblue"}} class="bi bi-twitter "></i>
                        </div>
                        <div className="footer-social-media-icon">
                          <i  style={{color:"darkblue"}} class="bi bi-telegram "></i>
                        </div>
                        
                       
                   

                  </div>

             </div>


             <div className="footer-links-wraper">
                <div className="footer-links-item">
                <h3 className="footer-links-item-title">Usefull Links</h3>

                    <ul className="footer-links">
                        <Link to={"/"}  className="footer-link">Homme</Link>
                        <Link to={"/authors"} className="footer-link">Authors</Link>
                        <Link to={"/about"}  className="footer-link">About Us</Link>
                        <Link to={"/contact"}  className="footer-link">Contact Us</Link>
                        <Link to={"/register"}  className="footer-link">Register</Link>
                      
                    </ul>
                </div>
         


          
                <div className="footer-links-item">
                   <h3 className="footer-links-item-title-info">informattion</h3>
                      <div className="footer-address-wraper">
                        <div className="footer-address">
                            <i className="bi bi-geo-alt-fill"></i>
                            Moroco - Marrakech - kawkab-marrakech
                        </div>
                        <div className="footer-address">
                          <i class="bi bi-phone-fill"></i>
                             +212 617 03 94 18
                        </div>
                        <div className="footer-address">
                          <i class="bi bi-envelope"></i>
                              younessbaka7@gmail.com
                        </div>
                        


       

                 
                </div>
             </div>


       
                <div className="footer-links-item">
                <h3 className="footer-links-item-title">About Us</h3>
                <div className="footer-item-discription">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis perspiciatis commodi alias. Ipsum, vitae error est odit dolores, amet quia suscipit, maxime molestias veniam perspiciatis voluptas tenetur enim id repellendus.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sit, recusandae tenetur laborum tempora voluptatibus sequi quibusdam eos pariatur debitis quidem quod! Minima itaque corrupti quas dignissimos adipisci, incidunt illum?
                </div>


                </div>
             </div>

            
        </footer>

    );
}

export default Footer;
