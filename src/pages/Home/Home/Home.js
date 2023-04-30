import React from 'react';
import Banner from '../banner/Banner';
import UseTitle from '../../../hookes/UseTitle';

const Home = () => {
    UseTitle('Home')
    return (
        <div className='mx-[21px]'>
            <Banner></Banner>
        </div>
    );
};

export default Home;