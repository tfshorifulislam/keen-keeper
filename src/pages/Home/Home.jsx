import React from 'react';
import Banner from '../../components/banner/Banner';
import BannerSectionCard from '../../components/bannerSectionCard/BannerSectionCard';
import AllFriendsData from '../../components/allFriendsData/AllFriendsData';

const Home = () => {
    return (
        <div>
            <Banner />
            <BannerSectionCard />
            <AllFriendsData />
        </div>
    );
};

export default Home;