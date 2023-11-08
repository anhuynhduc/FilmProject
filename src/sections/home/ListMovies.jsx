import "./listMovies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../constants/index.js";
import Movie from "../../components/home/Movie.jsx";

 function ListMovies({ typeMovies , data}) {
    const movie = data.map((item, index) => (
        <Movie
            key={index}
            name={item.name}
            url={item.imageUrl}
            price={item.price}
            description={item.description}
            order={item.order}
        />
    ));

    return (
        <div className="ListMovies xl:mt-[80px] md:mt-[50px] sm:mt-[30px] w-[90%] ml-[5%]">
            <h1 className="text-main-white xl:text-[45px] md:text-[25px]
            xl:my-10 xl:mx-8 md:my-10 md:mx-8 sm:mx-4 sm:my-4">{typeMovies}</h1>
            <Carousel responsive={responsive}>
                {movie}
            </Carousel>
        </div>
    );
}
export default ListMovies