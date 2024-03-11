
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/header.jsx'
import HedingTitle from './Components/HedingTitle.jsx';
import Services from './Components/Services/Service.jsx'
import SlideBook from "./Components/SlideBoook/SlideBook.jsx"
import { books } from "./data/books.js"

function App() {
  return (
    <div>
      <Header/>

      
      <Services/>

      <HedingTitle  title={"Most Gifted"}/>
      <SlideBook data={books}/>
     
      <HedingTitle  title={"Best Sellers "}/>
      <SlideBook data={books}/>
    

      <HedingTitle  title={"Most Widhed For"}/>
      <SlideBook data={books}/>

      <Footer/>
  



    </div>
  );
}

export default App;
