import React from 'react';

import cartiteminfo from '../../../context/cartcontext';
import  { useContext } from 'react';

import  "./cart.css";

const Cart = () => {
  const { cartitems, Additem, Removeitem } = useContext(cartiteminfo);
    return (
        <div className='cart'>
          <p className='title-cart'>Your Shopping</p>
             <div className="cart-warapper">

          
                <div className="cart-items">
                    {cartitems.map(item => 
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
                              
                             <button  onClick={() => Additem({...item,quantity:item.quantity + 1}) }>
                             <i class="bi bi-plus-lg"></i>
                             </button>
                             <b className='number-Quntiti'> {item.quantity} </b>
                             <button onClick={() =>item.quantity>0 && Additem({...item,quantity:item.quantity - 1}) }>
                             <i class="bi bi-dash-lg"></i>
                             </button><br />

                         <b>  price :  </b>  <b className='price-cart'>${(item.price * item.quantity).toFixed(2)}</b>

                        
         
                            </div>
                            <i onClick={() => Removeitem(item.id) } class="bi bi-trash-fill delet-cart"></i>

                            
                           
                         
                           </div>
                           
                        
                    )}
                   
                </div>







                <div className="cart-info-summary">
                 <div className="order-summary-title">ORDER SUMMARY</div>
                  <div className="order-summary-item">
                    <span>SubTotal</span>
                    <span>${(cartitems.reduce((kk,cc) => kk + cc.price * cc.quantity ,0).toFixed(2))}</span>
                

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
                    <span>${(cartitems.reduce((total,item) => total + item.price * item.quantity ,0).toFixed(2))}</span>
                  </div>
              </div>
                
              

                 

             </div>
         
        </div>
          
    );
}

export default Cart;
