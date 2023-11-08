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
        <div className="ListMovies xl:mt-[80px] md:mt-[50px] w-[90%] xl:ml-[5%] sm:ml-[2%] md:ml-[5%] ">
            <h1 className="text-main-white xl:text-[45px] md:text-[25px] xl:my-10 xl:mx-8
            md:my-10 md:mx-8 sm:my-6 sm:mx-8">
                Continue Watching
            </h1>
            <Carousel responsive={responsiveVideo}>
                {movie}
            </Carousel>
        </div>
    );
};

export default ListOutstanding;