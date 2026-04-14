import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const layout = () => {
    return (
        <div className='max-w-480 mx-auto bg-[#F8FAFC]'>
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default layout;