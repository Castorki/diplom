import React from 'react';
import { useSelector } from 'react-redux';

function Strenghts() {
    const strenghts = useSelector(state => state.strenghts)
    return (
        <article className="our__strengths center">
            {strenghts.map(item => (
                <div key={item.id} className='block'>
                    <img className='icon' src={item.image} />
                    <h3 className='strength__heading'>{item.name}</h3>
                    <p className='strength__info'>{item.description}</p>
                </div>
            ))};
        </article>
    );
}

export default Strenghts;
