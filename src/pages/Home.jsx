import React, { useEffect } from 'react';
import SubscriptionBoxes from '../components/SubscriptionBoxes';
import Slider from '../components/Slider';
import WinterWellnessTips from '../components/WinterWellnessTips';
import CuratedCombos from '../components/CuratedCombos';

const Home = () => {
    useEffect(() => { 
        document.title = "Home-FrostBox";
      }, []);

    return (
        <div className='w-11/12 mx-auto my-8 space-y-10'>
            <Slider></Slider>
            <SubscriptionBoxes></SubscriptionBoxes>
            <WinterWellnessTips></WinterWellnessTips>
            <CuratedCombos></CuratedCombos>
        </div>
    );
};

export default Home;