import React, {useEffect} from 'react';
import {Outlet, useNavigate} from "react-router";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

const AdminLayout :React.FC = () => {
    const isAuthenticated =useSelector((state: RootState) => state.auth.isAuthenticated)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/admin/login')
        }
    }, [isAuthenticated, navigate]);

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default AdminLayout;
