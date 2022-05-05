import React from 'react';
import notfound from '../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h3 className='text-primary text-center'>Engine not working</h3>
            <img className='w-100' src={notfound} alt="" />
            
        </div>
    );
};

export default NotFound;