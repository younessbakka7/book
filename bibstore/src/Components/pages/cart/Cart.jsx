import React from 'react';
import { cartInfo } from '../../../data/cart.js';

import  "./cart.css";

const Cart = () => {
    return (
        <div className='cart'>
          <p className='title-cart'>Your Shopping</p>
             <div className="cart-warapper">

          
                <div className="cart-items">
                    {cartInfo.map(item => 
                         <div key={item.id} className="cart-item">
                            <img src={`/books/${item.image}`} alt={item.title} className='cart-item-image' />


                            <div className="cart-item-info">
                                 <div className="cart-item-book-title">
                                    <b>Title : </b> {item.title}
                                </div>
                                 <div className="cart-item-book-authors">
                                    <b>Authors : </b> {item.author}
                                 </div>
                             



                            </div>

                            <div className="cart-quantitiy">
                             <button>
                             <i class="bi bi-plus-lg"></i>
                             </button>
                             <b className='number-Quntiti'> {item.quantity} </b>
                             <button>
                             <i class="bi bi-dash-lg"></i>
                             </button><br />

                         <b>  price :  </b>  <b className='price-cart'>${item.price * item.quantity}</b>

                        
         
                            </div>
                            <i class="bi bi-trash-fill delet-cart"></i>

                            
                           
                         
                           </div>
                           
                        
                    )}
                   
                </div>







                <div className="cart-info-summary">
                 <div className="order-summary-title">ORDER SUMMARY</div>
                  <div className="order-summary-item">
                    <span>SubTotal</span>
                    <span>${cartInfo.reduce((kk,cc) => kk + cc.price * cc.quantity ,0)}</span>
                

                  </div>
                  <div className="order-summary-item">
                    <span>Shopping Cost</span>
                    <span>0</span>
                  </div>
                  <div className="order-summary-item">
                    <span>Discount</span>
                    <span>0</span>
                  </div>
                  <div className="order-summary-item">
                    <span>Total</span>
                    <span>${cartInfo.reduce((total,item) => total + item.price * item.quantity ,0)}</span>
                  </div>
              </div>
                
              

                 

             </div>
         
        </div>
          
    );
}

export default Cart;
