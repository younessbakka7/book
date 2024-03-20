import React from 'react';
import HedingTitle from "../../HedingTitle.jsx"

import Services from '../../Services/Service.jsx'
import SlideBook from "../../SlideBoook/SlideBook.jsx"
import { books } from "../../../data/books.js"

const HomePage = () => {
    return (
        <div className='HomePage'>

            <Services />
            <HedingTitle title={"Most Gifted"} />
            <SlideBook data={books} />

            <HedingTitle title={"Best Sellers "} />
            <SlideBook data={books} />


            <HedingTitle title={"Most Widhed For"} />
            <SlideBook data={books} />
        </div>
    );
}

export default HomePage;
