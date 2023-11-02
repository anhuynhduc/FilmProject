import React, { useState } from 'react';

function Test() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative">
            <div
                className="w-40 h-40 bg-blue-500 hover:bg-blue-600 transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Hover me
            </div>

            {isHovered && (
                <div className="absolute bg-gray-100 p-2 rounded shadow-md top-10 left-0">
                    This appears on hover
                </div>
            )}
        </div>
    );
}

export default Test;
