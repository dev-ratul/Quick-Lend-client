import React from 'react';
import Nabvar from '../../../components/navbar/Nabvar';
import Banner from '../Banner/Banner';
import UserInformation from '../UserInformation/UserInformation';
import OurIndustrySolutions from '../OurIndustrySolutions/OurIndustrySolutions';

const Home = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Banner></Banner>
            <UserInformation></UserInformation>
            <OurIndustrySolutions></OurIndustrySolutions>
        </div>
    );
};

export default Home;