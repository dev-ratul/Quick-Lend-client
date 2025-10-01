import React from 'react';
import Nabvar from '../../../components/navbar/Nabvar';
import Banner from '../Banner/Banner';
import UserInformation from '../UserInformation/UserInformation';
import OurIndustrySolutions from '../OurIndustrySolutions/OurIndustrySolutions';
import CreditLimitTiers from '../CreditLimitTiers/CreditLimitTiers';
import HowItWork from '../HowItWork/HowItWork';
import GetYourCreditScore from '../GetYourCreditScore/GetYourCreditScore';


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <UserInformation></UserInformation>
            <OurIndustrySolutions></OurIndustrySolutions>
            <CreditLimitTiers></CreditLimitTiers>
            <HowItWork></HowItWork>
            <GetYourCreditScore></GetYourCreditScore>
 
        </div>
    );
};

export default Home;