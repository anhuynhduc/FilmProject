import "./listMovies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ContinueWatchingData, responsiveVideo} from "../../constants/index.js";
import Watching from "../../components/home/Watching.jsx";


const ListOutstanding = () => {

    const movie = ContinueWatchingData.map((item, index) => (

        <Watching
            key={index}
            name={item.name}
            url={item.imageUrl}
            price={item.price}
            description={item.description}
        />
    ));
    return (
        <div className="ListMovies mt-[80px] w-[90%] ml-[5%]">
            <h1 className="text-main-white text-[45px] my-10 mx-8">Continue Watching</h1>
            <Carousel responsive={responsiveVideo}>
                {movie}
            </Carousel>
        </div>
    );
};

export default ListOutstanding;