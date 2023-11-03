import React from "react";
import iconPlay from '../../assets/images/icons/iconPlay.svg'
 function Movie({ url, name}) {
    return (
        <div className="group ml-[30px] relative overflow-hidden">
            <img className="movie--image object-cover h-auto w-[100%] brightness-[100%]
            group-hover:brightness-[50%]  group-hover:scale-[1.2] transition duration-[0.5s]
            ease-in-out"
                 src={url} alt="product image"
            />
            <div className="absolute h-[120px] w-[202px] bottom-0 left-0
            flex flex-col items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-[-50px]
            transition duration-[0.5s] ease-in-out">
                {/*<div className="w-[80%] text-center">*/}
                {/*    <p className="text-main-white text-[20px] truncate">{name}</p>*/}
                {/*</div>*/}
                <div className="mt-[70px]">
                    <button className="w-[170px] h-[50px] flex justify-center items-center rounded-[5px]
                    border-[1px] border-solid border-white gap-[5px] bg-none cursor-pointer z-10
                    hover:opacity-90 hover:bg-[#CC9933] hover:border-none">
                        <img src={iconPlay} alt="" className="h-[20px]"/>
                        <p className="text-main-white text-[20px]">Watch Now</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Movie