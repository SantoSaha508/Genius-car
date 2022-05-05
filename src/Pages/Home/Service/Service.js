import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, price, description, } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>This is srrvice: {name}</h4>
            <p>Details: {description}</p>
            <h4>Price: {price}</h4>
            <button onClick={() => navigateToServiceDetail(id)}>Book:{name}</button>
        </div>
    );
};

export default Service;