import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="row">
            <h2 className="text-primary"> Our Services</h2>
            <div className="service-container  ">
                {
                    services.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            
            </div>
            
        </div>
    );
};

export default Services;
