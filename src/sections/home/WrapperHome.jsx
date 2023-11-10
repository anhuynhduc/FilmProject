import React, {useEffect, useState} from 'react';
import Nav from "../../components/Nav.jsx";
import WrapperContent from "./WrapperContent.jsx";
import Footer from "../../components/Footer.jsx";

const WrapperHome = () => {
    return (
        <main className="relative">
            <Nav/>
            <WrapperContent/>
            <Footer/>
        </main>
    );
};

export default WrapperHome;