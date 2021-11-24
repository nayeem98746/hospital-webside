import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Information = () => {
    const {service} = useParams()
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/service.json')
        .then(res=>res.json()) 
        .then(data => setDetails(data))
        .then(data => console.log(data))
    },[])
    const product=details.find(pd => pd.id == service)
    console.log(product)

    return (
        <div>
            <img src={product?.img} alt="" />
            <h2>this is all informatioin:{service}</h2>
            <h3>Name : {product?.name}</h3>
            <h3>Amount : {product?.amount}</h3>
            <h3>Description : {product?.describtion}</h3>
        </div>
    );
};

export default Information;