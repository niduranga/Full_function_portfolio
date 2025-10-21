import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import AdminLogin from "../../components/login/AdminLogin.tsx";
import Home from "../../components/pages/Home.tsx";
import GuestLayout from "../../layouts/GuestLayout.tsx";
import About from "../../components/pages/About.tsx";
import Education from "../../components/pages/Education.tsx";
import Skills from "../../components/pages/Skills.tsx";
import Contact from "../../components/pages/Contact.tsx";
import Experience from "../../components/pages/Experience.tsx";
import AdminLayout from "../../layouts/AdminLayout.tsx";
import axios from "axios";

const AppRoutes :React.FC = () => {
    axios.defaults.url = import.meta.env.VITE_API_BASE_URL
    axios.defaults.withCredentials = true
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<GuestLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
            </Routes>
            <Routes>
                <Route element={<AdminLayout/>}>
                    <Route path="/portfolio/admin/login" element={<AdminLogin/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
