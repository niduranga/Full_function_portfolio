import React from 'react';
import {Outlet} from "react-router";
import NavigationBar from "../components/navigationBar/NavigationBar.tsx";

const GuestLayout :React.FC = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default GuestLayout;
