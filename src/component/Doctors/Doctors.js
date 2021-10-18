import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';
import "./Doctors.css"

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div>
            <h2>Our doctors</h2>
            <div className="doctor-container">
                {
                    doctors.map(doctor => <Doctor
                    key={doctor.id}
                    doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;