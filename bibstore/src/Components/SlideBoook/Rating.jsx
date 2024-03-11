import React from 'react';
import "./SlideBook.css"
const Rating = ({rating, reviews}) => {
    return (
       <div className="rating">
            { 
            rating >= 1 ?  <i class="bi bi-star-fill"></i> : rating >= 0.5 ?  <i class="bi bi-star-half"></i>
            : <i class="bi bi-star"></i>
            
            }
            { 
            rating >= 2 ?  <i class="bi bi-star-fill"></i> : rating >= 1.5 ?  <i class="bi bi-star-half"></i>
            : <i class="bi bi-star"></i>
            
            }
            { 
            rating >= 3 ?  <i class="bi bi-star-fill"></i> : rating >= 2.5 ?  <i class="bi bi-star-half"></i>
            : <i class="bi bi-star"></i>
            
            }
            { 
            rating >= 4 ?  <i class="bi bi-star-fill"></i> : rating >= 3.5 ?  <i class="bi bi-star-half"></i>
            : <i class="bi bi-star"></i>
            
            }
            { 
            rating >= 5 ?  <i class="bi bi-star-fill"></i> : rating >= 4.5 ?  <i class="bi bi-star-half"></i>
            : <i class="bi bi-star"></i>
            
            }
            <span>
                {rating}
            </span> 
            <span>
               ({reviews}) 
            </span>
    
       </div>
    )
}

export default Rating;
