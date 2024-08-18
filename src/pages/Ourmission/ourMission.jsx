import React from 'react';
import { HeroSection } from './components/heroSection';
import SecondSection from './components/secondSection';
import { OurTeam } from './components/ourTeam';
import { LastSection } from './components/lastSection';

export const OurMission = () => {
    return (
        <div className='py-4 px-20'>
            <HeroSection />
            <SecondSection />
            <OurTeam />
            <LastSection/>
        </div>
    );
};

