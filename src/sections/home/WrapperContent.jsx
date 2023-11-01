import React from 'react';
import ListLink from "./ListLink.jsx";
import Suggest from "./Suggest.jsx";
import BannerBottom from "./BannerBottom.jsx";

const WrapperContent = () => {
    return (
        <div className="w-[90%] bg-midnight-blue h-auto ml-[5%] py-14" >
            <ListLink/>
            <Suggest/>
            <BannerBottom/>
        </div>
    );
};

export default WrapperContent;