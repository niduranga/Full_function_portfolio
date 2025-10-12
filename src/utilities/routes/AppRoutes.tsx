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

const AppRoutes :React.FC = () => {
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
                <Route>
                    <Route path="/portfolio/admin/login" element={<AdminLogin/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
