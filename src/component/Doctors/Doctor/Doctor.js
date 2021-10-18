import React from 'react';

const Doctor = ({doctor}) => {
    const {id, name, Degree, Department,visitAmount, img} = doctor
    return (
        <div className="pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h2>Visit Amount:{visitAmount}$</h2>
            <h4>{Degree}</h4>
            <h4>{Department}</h4>
        </div>
    );
};

export default Doctor;