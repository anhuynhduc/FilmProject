import React from 'react';

import ReactPlayer from 'react-player';
const Watching = ({ url }) => {
    return (
            <div className="card ml-[30px] relative rounded-[10px] overflow-hidden">
                <ReactPlayer
                    url={url}
                    controls={true}
                    width="auto"
                    height={200}
                />
            </div>
    );
};

export default Watching;