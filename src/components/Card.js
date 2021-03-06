import React from 'react';
import '../index.css';

const Card = (props) => {
    const {name, email, id} = props;
    return(
        <div className='tc bg-light-green dib br2 pa3 ma3 grow bw4 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='' style={{width:"200px", height:"200px"}}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;