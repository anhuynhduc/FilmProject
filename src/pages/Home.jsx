import React from 'react';
import Nav from "../components/Nav.jsx";
import WrapperContent from "../sections/home/WrapperContent.jsx";
import Footer from "../components/Footer.jsx";

import Reveal from "../components/home/Reveal.jsx";

const Home = () => {
    return (
        <main className="relative">
            <Nav/>
            <WrapperContent/>
            <Footer/>
        </main>
    );
};

export default Home;