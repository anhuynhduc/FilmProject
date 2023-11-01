import React from 'react';
import Nav from "../components/Nav.jsx";
import WrapperContent from "../sections/home/WrapperContent.jsx";
import Suggest from "../sections/home/Suggest.jsx";
import Footer from "../components/Footer.jsx";
import SliderSearch from "../sections/home/SliderSearch.jsx";

const Home = () => {
    return (
        <main className="relative">
            <Nav/>
            <SliderSearch/>
            <WrapperContent/>
            <Footer/>
        </main>
    );
};

export default Home;