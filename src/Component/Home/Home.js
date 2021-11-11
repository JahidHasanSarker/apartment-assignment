import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Banner from '../Banner/Banner';
import ServiceHome from '../ServiceHome/ServiceHome';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <Team></Team>
            <AllReviews></AllReviews>
        </div>
    );
};

export default Home;