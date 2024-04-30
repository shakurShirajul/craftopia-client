import React from 'react';
import CraftItems from '../../components/CraftItems/CraftItems';
import Banner from '../../components/Banner/Banner';
import BoxOne from '../../components/BoxOne/BoxOne';
import Reviews from '../../components/Reviews/Reviews';
import ArtAndCraftCategories from '../../components/ArtAndCraftCategories/ArtAndCraftCategories';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Craftopia</title>
            </Helmet>
            <Banner></Banner>
            <div className='container mx-auto'>
                <CraftItems></CraftItems>
                <BoxOne></BoxOne>
                <ArtAndCraftCategories/>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Home;