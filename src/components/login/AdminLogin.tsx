import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AuthApi} from "../../utilities/Api/AuthApi.ts";
import type {RootDispatch, RootState} from "../../store/store.ts";
import {useNavigate} from "react-router";

const AdminLogin: React.FC = () => {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch<RootDispatch>()
    const isAuthenticated =useSelector((state: RootState) => state.auth.isAuthenticated)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/admin/dashboard')
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setLoginInfo((prevState)=> ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await dispatch(AuthApi({loginInfo}))
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit}
                  className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Login to Admin Dashboard</h2>
                <input
                    type="email"
                    name="email"
                    value={loginInfo.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                <input
                    type="password"
                    name="password"
                    value={loginInfo.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
                <button type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200">
                    Login
                </button>
            </form>
        </section>
    );
};

export default AdminLogin;
