import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        // <div className='bg-[#f5f6f7]'>
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;

