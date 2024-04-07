import React, { useState } from 'react';
import "./Modal.css"
import {Link, link} from "react-router-dom"
import Rating from '../SlideBoook/Rating';
import {useContext} from 'react';

//add item in cart
import cartitem from '../../context/cartcontext';



const Modal = ({ dataBook, setOpenModal }) => {

   //quantity
   const [qty, setQty] = useState(1);
 
   const { image, title, inStock, author, rating, reviews, price,id } = dataBook
   const { Additem } = useContext(cartitem);
   return (
      <div onClick={() => { setOpenModal(false) }} className="modal-container">
         <div onClick={(event) => { event.stopPropagation() }} className="modal-content">
            <i onClick={() => { setOpenModal(false) }} className="bi bi-x-circle-fill modal-icon"></i>
            <img className='model-content-info-img' src={`./books/${image}`} />

            <div className="model-content-info">
               <h5>{title}</h5>
               <div className="model-content-info-stock">
                  <b>Staus : </b> {inStock ? "in stock" : "Not in Stock"}
               </div>


               <Rating rating={rating} reviews={reviews} />

               <div className="model-content-info-Authors">
                  Authors : <b> {author} </b>
               </div>

               <div className="model-content-info-price">
                  price : <b>${price} </b>
               </div>

               <div className="model-content-info-add-card">
                  <input type="number" min={1} max={100} value={qty} onChange={e=>setQty(e.target.value)} className='Modal-add-to-card-input' />
                  <button onClick={() => Additem({...dataBook, quantity:qty})}  className='Modal-add-to-card-btn'>   <i className="bi bi-cart-plus"></i> Add To Card</button>
               </div>

               <Link to={`/Book/${id}`} className="model-content-info-link">
                  see you more
               </Link>


            </div>







            <div className="model-content-info-rating">

            </div>

            <div className="model-content-info-price">

            </div>



          
         </div>

      </div>
   );
}

export default Modal;
