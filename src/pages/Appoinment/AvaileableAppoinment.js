import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentCard from './AppoinmentCard';
import AppoinmentModal from './AppoinmentModal';

const AvaileableAppoinment = ({selected}) => {
    const [appointmentOptions,setAppointmentOptions] = useState([])
    const [bookinInfo,setBookingInfo] = useState(null)
    useEffect(()=>{
        fetch("appointmentOptions.json")
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    
    return (
        <div className='mt-12'>
            <p className=' text-center font-bold text-secondary text-xl'>Available Services on {format(selected,"PP")} </p>
            <div className='mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {appointmentOptions.map(option=><AppoinmentCard setBookingInfo={setBookingInfo} key={option._id} appointmentOption={option}></AppoinmentCard>)}
            </div>
            {bookinInfo && <AppoinmentModal setBookingInfo={setBookingInfo} bookinInfo={bookinInfo} selected={selected}></AppoinmentModal>}
        </div>
    );
};

export default AvaileableAppoinment;