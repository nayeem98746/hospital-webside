import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Information = () => {
    const {service} = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/service.json')
        .then(res=>res.json())
        .then(data => setDetails(data))
    },[])
    const product=details.find(pd => pd.id==service)
    console.log(product)

    return (
        <div>
            <h2>this is al informatioin : {service}</h2>
        </div>
    );
};

export default Information;