import React from 'react';
import {Outlet} from "react-router";
import NavigationBar from "../components/navigationBar/NavigationBar.tsx";

const GuestLayout :React.FC = () => {
    return (
        <div className='bg-white grid grid-cols-2'>
            <div className="col-start-1 col-end-3">
                <NavigationBar/>
            </div>
            <div className="col-start-1 col-end-3">
                <Outlet/>
            </div>
        </div>
    );
};

export default GuestLayout;
