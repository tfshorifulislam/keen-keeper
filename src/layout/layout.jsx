import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const layout = () => {
    return (
        <div className='max-w-480 mx-auto bg-[#F8FAFC]'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default layout;