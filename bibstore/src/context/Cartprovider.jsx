import  { useState } from 'react';

import cartcontext from './cartcontext';

const Cartprovider = ({ children }) => {
    const [cartitems, setCartitems] = useState([])

    // Add to card

    const Additem = (item) => {
      const Exist = cartitems.find(cart =>cart.id === item.id) 
      if(Exist){
        setCartitems(cartitems.map((newitem)=> newitem.id === item.id ? item : newitem )) //repete item just change quantity 
      }  else{
        setCartitems((prev) =>  [...prev, item])
      }
         
    }

    // Rempve to item in card

    const Removeitem = (id) => {
        const cart = cartitems.filter((c) => c.id !== id);
        setCartitems(cart)

    }
    return (
      <cartcontext.Provider value={{
        cartitems,
        Additem,
        Removeitem,
        itemlenght:cartitems.length //lenght cartitems in array to cart(sla)


    }}> 
            {children}
        </cartcontext.Provider>)
}

export default Cartprovider;




