import React from 'react';
import Nabvar from '../../../components/navbar/Nabvar';
import Banner from '../Banner/Banner';
import UserInformation from '../UserInformation/UserInformation';
import OurIndustrySolutions from '../OurIndustrySolutions/OurIndustrySolutions';
import CreditLimitTiers from '../CreditLimitTiers/CreditLimitTiers';
import HowItWork from '../HowItWork/HowItWork';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <UserInformation></UserInformation>
            <OurIndustrySolutions></OurIndustrySolutions>
            <CreditLimitTiers></CreditLimitTiers>
            <HowItWork></HowItWork>
        </div>
    );
};

export default Home;