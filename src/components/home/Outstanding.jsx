import React from 'react';

const Outstanding = ({ url , order}) => {
    return (
        <div className="card ml-[70px] relative">
            <img className="movie--image object-cover h-auto w-[100%]" src={url} alt="product image" />
            <div className="order">
                <h1 className="text-[120px] text-[#84828F] font-bold">{order}</h1>
            </div>
        </div>
    );
};

export default Outstanding;