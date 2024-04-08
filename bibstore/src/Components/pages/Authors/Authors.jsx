import React from 'react';
import {authors} from '../../../data/authors'
import  "./Authors.css"
import { useState} from 'react'


const Authors = () => {
    const [filter, setFilter] = useState("")
    
    return (
        <div className='authors'>
            <div className='filter-authors'>
                <input type='search' value={filter} className='box-filter' placeholder='filter...' onChange={e=>setFilter(e.target.value)} />
               
            </div>
           <div className='authors-wrapeer'>
              {authors.filter(a=>a.name.toLowerCase().includes(filter)).map((e) => (
                <div className='info-authors' key={e.id}>
                    <img className='image-authors' src={e.image} alt={e.name} />
                    <h2 className='name-authors'>{e.name}</h2>
                </div>
              ))}
        
              
        

           </div>

            
        </div>
    );
}

export default Authors;
