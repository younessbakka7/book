
import "./SlideBook.css"

import { useContext, useState } from "react";
import Rating from "./Rating.jsx";
import Modal from "../Modal/Modal.jsx";
import cartcontext from "../../context/cartcontext";

const SlideBook = ({data}) => {

  //usecontexte pour add-tem-to-card
  const { Additem } = useContext(cartcontext)
  //quantity
  const [quantity, setQuantity] = useState(1);
  //modal//
  const [openModal, setOpenModal] = useState(false);
  const [dataBook, setDatabook] = useState(null);

  const handleModal = (book) => {
    setOpenModal(true)
    setDatabook(book)
  

  }





    //slide//
    const [Slidebook, setSlidebook] = useState(0);
    const HandleClick = (direction) => {
        if(direction === "left"){
            setSlidebook(Slidebook - 1)

        }else{
            setSlidebook(Slidebook + 1)
        }
    }
  
    return (
     
    <div className='book-slider-container'>
        {Slidebook >0 && <i onClick={() => {HandleClick("left")}} class="bi bi-chevron-left chev-slid-book-left"></i>}
       
     
           <div style={{transform:`translateX(${Slidebook* -166}px)`}} className='book-slider-wraper'>
            {data.map((item) => 
               <div key={item.id} className="book-slide-item">
               <img src={`./books/${item.image}`} alt={item.title}  className='book-slide-item-img' />
               <h3 className='book-slide-item-title'>{item.title}</h3>
               <Rating rating={item.rating} reviews={item.reviews}/> 
               <p className='book-slide-item-price'>${item.price}</p>
               <div className="book-slide-item-icon">
               <i onClick={() => {handleModal(item)}} class="bi bi-eye icon-show"></i>
               <i onClick={() =>Additem({...item, quantity}) } class="bi bi-cart-check-fill icon-add-cart"></i>
               </div>

               </div>
            )}

            </div>
            {Slidebook <= data.length - 1 &&  <i  onClick={() => {HandleClick("right")}} class="bi bi-chevron-right chev-slid-book-right"></i> }
      {openModal && <Modal setOpenModal={setOpenModal} dataBook={dataBook}  />}
        
        
            
    </div>
    );
}

export default SlideBook;
