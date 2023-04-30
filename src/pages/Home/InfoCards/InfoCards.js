import React from 'react';
import clockImg from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const infoCardData = [
        {   
            id:1,
            title:'Opening Hours',
            description:"Our service open 9.00 am to 6.00 pm",
            image:clockImg,
            bgClass:"bg-primary bg-gradient-to-r from-primary to-secondary"
        },
        {   
            id:2,
            title:'Visit our location',
            description:"Brooklyn, NY 10036, United States",
            image:marker,
            bgClass:"bg-accent bg-gradient-to-r from-primary to-accent"
        },
        {   
            id:3,
            title:'Contact us now',
            description:"+000 123 456789",
            image:phone,
            bgClass:"bg-primary bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className=' mt-5 grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-6'>
            {infoCardData.map(info => <InfoCard key={info.id} card = {info}></InfoCard>)}
        </div>
    );
};

export default InfoCards;