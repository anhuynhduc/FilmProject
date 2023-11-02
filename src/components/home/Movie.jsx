import React from "react";

 function Movie({ url, order}) {
    return (
        <div className="card ml-[30px] relative">
            <img className="movie--image object-cover h-auto w-[100%]" src={url} alt="product image" />
            <div className="order">
                <h1>{order}</h1>
            </div>
        </div>
    );
}
export default Movie