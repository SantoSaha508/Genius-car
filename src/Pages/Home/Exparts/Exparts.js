import React from 'react';

import expert1 from '../../../images/Exparts/expert-1.jpg';
import expert2 from '../../../images/Exparts/expert-2.jpg';
import expert3 from '../../../images/Exparts/expert-3.jpg';
import expert4 from '../../../images/Exparts/expert-4.jpg';
import expert5 from '../../../images/Exparts/expert-5.jpg';
import expert6 from '../../../images/Exparts/expert-6.png';

import Expart from '../Expart/Expart';

const experts = [
    {id: 1, name: 'Will smith', img: expert1},
    {id: 2, name: 'Stone page', img: expert2},
    {id: 3, name: 'Micle', img: expert3},
    {id: 4, name: 'Worner', img: expert4},
    {id: 5, name: 'Gill crist', img: expert5},
    {id: 6, name: 'Beer Gill', img: expert6}
]

const Exparts = () => {
    return (
        <div id='exparts' className='container'>
            <h4 className=' text-center bg-success p-3 mt-3'>Our exparts</h4>
            <div className="row">
                {
                    experts.map(expert => <Expart
                        key={expert.id}
                        expert={expert}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;