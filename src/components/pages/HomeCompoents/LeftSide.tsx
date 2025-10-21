import React from 'react';

const LeftSide :React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl sm:text-7xl md:text-9xl font-sans font-extrabold text-gray-900 leading-none">I'm a Software</h1>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-sans font-extrabold text-red-600 leading-none">Engineer</h1>
        </div>
    );
};

export default LeftSide;
