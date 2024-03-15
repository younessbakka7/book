import React from 'react';
import "./Modal.css"
import Rating from '../SlideBoook/Rating';
const Modal = ({ dataBook, setOpenModal }) => {
   const { image, title, inStock, author, rating, reviews, price } = dataBook
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
                  <input type="number" min={1} max={100} className='Modal-add-to-card-input' />
                  <button className='Modal-add-to-card-btn'>   <i className="bi bi-cart-plus"></i> Add To Card</button>
               </div>

               <div className="model-content-info-link">
                  see you more
               </div>


            </div>







            <div className="model-content-info-rating">

            </div>

            <div className="model-content-info-price">

            </div>



            <p>lo</p>
         </div>

      </div>
   );
}

export default Modal;
