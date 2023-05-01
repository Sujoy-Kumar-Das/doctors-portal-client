import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentCard from './AppoinmentCard';

const AvaileableAppoinment = ({selected}) => {
    const [appointmentOptions,setAppointmentOptions] = useState([])
    useEffect(()=>{
        fetch("appointmentOptions.json")
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    
    return (
        <div className='mt-12'>
            <p className=' text-center font-bold text-secondary text-xl'>Available Services on {format(selected,"PP")} </p>
            <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {appointmentOptions.map(option=><AppoinmentCard key={option._id} appointmentOption={option}></AppoinmentCard>)}
            </div>
        </div>
    );
};

export default AvaileableAppoinment;