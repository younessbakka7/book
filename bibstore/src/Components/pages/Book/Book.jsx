import React, { useContext, useState } from 'react';
import "./Book.css";
import {books} from '../../../data/books';
import {useParams} from "react-router-dom"
import Rating from '../../SlideBoook/Rating';
//

import CartContext from '../../../context/cartcontext';
const Book = () => {
//qantity book
const [qty, setQty] = useState(1);

    const { Additem } = useContext(CartContext);;
    const {id} = useParams() 
    const book = books.find((u) => { 
        return u.id === parseInt(id)
        
    })
    return (
      <div className="book">
        <div className="book-content">
         

            <img src={`/books/${book.image}`} alt={book.title} className='book-content-image' />
            <div className="book-content-info">
            <h1 className='book-content-title'>{book.title} </h1>
            <div className="book-content-authors">
             <b  className='flex-style'> by </b>  <b className='author-name'>{book.author}</b> <b className='flex-style'>( Authors )</b>
            </div>
            <Rating rating={book.rating} reviews={book.reviews}/>
            
            <div className="book-content-add-card">
                <input type="number" max={100} min={1} value={qty} onChange={e=>setQty(e.target.value)}   className='book-content-input' />

                <button onClick={() => Additem({...book, quantity:qty})}  className='book-content-show-btn'>
                <i class="bi bi-cart-plus "></i>
                    Add To Card 
                </button>

               

               
            </div>

            <div className="book-content-price">
              <b> price : </b> <p className='book-content-show-price'>${book.price}</p>
            </div>


          
          </div>
            
          
               
            
       
            
             

        </div>
       


        <div className="book-content-description">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tempora incidunt voluptate ipsum quasi praesentium
                     deserunt architecto doloribus perspiciatis voluptas deleniti culpa vero velit molestias debitis impedit eos corporis minima!
                   amet consectetur adipisicing elit. Mollitia esse id aliquam, quidem libero temporibus repellat quae, veniam nobis incidunt nisi fugiat facilis sequi debitis nemo inventore. 
                
            </p>
      </div> 


        <div className="book-content-icons">
            <div className="print-length">
                <small> Print length</small>
                <i class="bi bi-file-break icon-show-book"></i>
              <b className='pub-show-book'>{book.printLength}</b>
            </div>
            <div className="Language">
                <small>Language</small>
                <i class="bi bi-globe icon-show-book"></i>
              <b className='pub-show-book'>{book.language}</b>
            </div>
            <div className="Publication-Date">
                <small>PublicationDate</small>
              
              <i  className="bi bi-calendar3 icon-show-book"></i>
              <b className='pub-show-book'>{book.PublicationDate}</b>
            </div>
            
       </div>  




      </div>
    );
}

export default Book;
