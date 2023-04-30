import React from 'react';
import Fluoride from "../../../assets/images/fluoride.png"
import Cavity from "../../../assets/images/cavity.png"
import Whitening from "../../../assets/images/whitening.png"
import ServiceCard from './ServiceCard';
import ServiceBanner from './ServiceBanner';
const Services = () => {
    const serviceData = [
        {   
            id:1,
            title:'Fluoride Treatment',
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image:Fluoride,
        },
        {   
            id:2,
            title:'Cavity Filling',
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image:Cavity,
        },
        {   
            id:3,
            title:'Teeth Whitening',
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            image:Whitening,
        },
    ]
    return (
        <div className='my-10'>
            <h3 className=' text-center font-bold text-secondary text-xl'>OUR SERVICES</h3>
            <h1 className=' mt-2 text-center font-bold text-black text-3xl'>Services We Provide</h1>
            <div className=' mt-20 grid sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 gap-8'>
                {serviceData.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)}
            </div>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Services;