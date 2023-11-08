import React from 'react';
import "./listMovies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {outstandingData, responsive} from "../../constants/index.js";
import Outstanding from "../../components/home/Outstanding.jsx";


const ListOutstanding = () => {

    const movie = outstandingData.map((item, index) => (

        <Outstanding
            key={index}
            name={item.name}
            url={item.imageUrl}
            price={item.price}
            description={item.description}
            order={item.order}
        />
    ));
    return (
        <div className="ListMovies xl:mt-[80px] md:mt-[50px] w-[90%] ml-[5%]">
            <h1 className="text-main-white xl:text-[45px] md:text-[25px] xl:my-10 xl:mx-8
            md:my-10 md:mx-8 sm:my-6 sm:mx-4">
                Weekly Top
            </h1>
            <Carousel responsive={responsive}>
                {movie}
            </Carousel>
        </div>
    );
};

export default ListOutstanding;