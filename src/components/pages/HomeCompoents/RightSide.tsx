import React from 'react';
import myImage from "./../../../assets/web.png"

const RightSide :React.FC = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-full w-96 h-96 flex items-center justify-center">
            <img src={myImage} alt="Profile" className="w-full h-full object-cover rounded-full"/>
        </div>
    );
};

export default RightSide;
