import React from "react";
import iconPlay from '../../assets/images/icons/iconPlay.svg'
 function Movie({ url, name}) {
    return (
            <div className="group xl:ml-[30px] md:ml-[15px] sm:ml-[10px] relative overflow-hidden">
                <img className="movie--image object-cover h-auto w-[100%] brightness-[100%]
                group-hover:brightness-[50%]  group-hover:scale-[1.2] transition duration-[0.5s]
                ease-in-out"
                     src={url} alt="product image"
                />
                <div className="absolute h-auto w-auto bottom-0 xl:left-[15px] 2xl:left-[60px] 2xl:bottom-[20px]
                flex flex-col items-center opacity-0 group-hover:opacity-100 xl:group-hover:translate-y-[-50px]
                transition duration-[0.5s] ease-in-out md:left-[20px] md:group-hover:translate-y-[-30px]
                sm:group-hover:translate-y-[-15px]">
                    <div className="mt-[70px]">
                        <button className="xl:w-[170px] xl:h-[50px] flex justify-center items-center rounded-[5px]
                        border-[1px] border-solid border-white gap-[5px] bg-none cursor-pointer z-10
                        hover:opacity-90 hover:bg-[#CC9933] hover:border-none md:w-[80px] md:h-[30px]
                        sm:w-[60px] sm:h-[20px] sm:rounded-[3px] sm:ml-1">
                            <img src={iconPlay} alt="" className="xl:h-[20px] md:h-[12px] sm:h-[10px]"/>
                            <p className="text-main-white xl:text-[20px] md:text-[9px] sm:text-[7px]">Watch Now</p>
                        </button>
                    </div>
                </div>
            </div>
    );
}
export default Movie