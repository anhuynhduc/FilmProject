import React from 'react';
import {bannerFooter1, bannerFooter2, bannerFooter3} from "../../assets/images/banner-footers/index.js";


const BannerBottom = () => {
    return (
        <div className="w-[90%] ml-[5%] mt-[80px]
        flex justify-center items-center gap-3
       ">
            <img className="w-[33.3%] filter drop-shadow-md" src={bannerFooter1} alt="banner1" />
            <img className="w-[33.3%] filter drop-shadow-md" src={bannerFooter2} alt="banner2" />
            <img className="w-[33.3%] filter drop-shadow-md" src={bannerFooter3} alt="banner3" />
        </div>
    );
};

export default BannerBottom;