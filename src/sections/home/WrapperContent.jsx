import React from 'react';
import ListLink from "./ListLink.jsx";
import Suggest from "./Suggest.jsx";
import BannerBottom from "./BannerBottom.jsx";
import ListMovies from "./ListMovies.jsx";
import {cartoonData, movieData, seriesData} from "../../constants/index.js";
import ListOutstanding from "./ListOutstanding.jsx";

const typeMovies = {
    movies: 'Movies',
    Series: 'Series',
    Cartoons: 'Cartoons',
    Weekly_Top: 'Weekly Top'
}

const WrapperContent = () => {
    return (
        <div className="w-[90%] bg-midnight-blue h-auto ml-[5%] py-14" >
            <ListLink/>
            <ListMovies typeMovies={typeMovies.movies} data={ movieData }/>
            <ListMovies typeMovies={typeMovies.Series} data={ seriesData }/>
            <Suggest/>
            <ListMovies typeMovies={typeMovies.Cartoons} data={ cartoonData }/>
            <ListOutstanding/>
            <BannerBottom/>
        </div>
    );
};

export default WrapperContent;