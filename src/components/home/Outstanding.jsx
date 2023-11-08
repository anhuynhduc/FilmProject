import React from 'react';

const Outstanding = ({ url , order}) => {
    return (
            <div className="card xl:ml-[70px] md:ml-[30px] sm:ml-[10px] relative">
                <img className="movie--image object-cover h-auto w-[100%]" src={url} alt="product image" />
                <div className="absolute xl:top-[110px] xl:left-[130px] opacity-80 2xl:left-[270px] 2xl:top-[250px]
                md:left-[70px] md:top-[50px] sm:left-[55px] sm:top-[50px]">
                    <h1 className="sm:text-[35px] md:text-[70px] xl:text-[120px] text-[#84828F] font-bold 2xl:text-[200px]">{order}</h1>
                </div>
            </div>
    );
};

export default Outstanding;