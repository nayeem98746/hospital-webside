import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/NotFound/3828541.jpg'
const NotFound = () => {
    return (
        <div>
           <img style={{width: "100%"}} src={notFound} alt="" />
           <Link to="/"><button className="btn-warning rounded p-2" >Go back</button></Link>
        </div>
    );
};

export default NotFound;