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
        <div className="ListMovies mt-[80px] w-[90%] ml-[5%]">
            <h1 className="text-main-white text-[45px] my-10 mx-8">Weekly Top</h1>
            <Carousel responsive={responsive}>
                {movie}
            </Carousel>
        </div>
    );
};

export default ListOutstanding;