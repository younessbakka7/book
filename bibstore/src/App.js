
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/header.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom';


import HomePage from './Components/pages/Home/HomePage.jsx';
import Authors from './Components/pages/Authors/Authors.jsx';
import About from './Components/pages/About/About.jsx';

import Contact from './Components/pages/Contact/Contact.jsx';
import Register from './Components/pages/Forms/Register.jsx';
import Login from './Components/pages/Forms/Login.jsx';
import Cart from './Components/pages/cart/Cart.jsx';
import Book from './Components/pages/Book/Book.jsx';

function App() {
  return (
    <BrowserRouter>
  
      <Header/>


      <Routes>
        <Route path="/" element={<HomePage/>}  />
        <Route path="/authors" element={<Authors/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/contact" element={<Contact/>}  />
        <Route path="/register" element={<Register/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/cart" element={<Cart/>}  />
        <Route path="/book/:id" element={<Book/>}  />
      </Routes>

      




      


     

      <Footer/>
  



    </BrowserRouter>
  );
}

export default App;
