import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h3>Welcome to details {serviceId}</h3>

        </div>
    );
};

export default ServiceDetails;
