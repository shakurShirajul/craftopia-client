import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#82CCDD;]'>
            {/* <h1>Testing</h1> */}
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;

