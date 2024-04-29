import React from 'react';
import CraftItems from '../../components/CraftItems/CraftItems';
import Banner from '../../components/Banner/Banner';
import BoxOne from '../../components/BoxOne/BoxOne';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='container mx-auto'>
                <CraftItems></CraftItems>
                <BoxOne></BoxOne>
            </div>
        </div>
    );
};

export default Home;