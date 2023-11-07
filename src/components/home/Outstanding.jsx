import React from 'react';

const Outstanding = ({ url , order}) => {
    return (
            <div className="card ml-[70px] relative">
                <img className="movie--image object-cover h-auto w-[100%]" src={url} alt="product image" />
                <div className="absolute top-[110px] left-[130px] opacity-80 2xl:left-[180px]">
                    <h1 className="text-[120px] text-[#84828F] font-bold 2xl:text-[180px]">{order}</h1>
                </div>
            </div>
    );
};

export default Outstanding;