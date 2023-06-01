import React from 'react';

import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <JobCategory></JobCategory>
           <FeaturedJobs></FeaturedJobs>
           
        </div>
    );
};

export default Home;