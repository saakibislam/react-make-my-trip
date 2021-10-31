import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { _id, img, name, price, description } = props.destination;
    return (
        <>
            {/* <!--Card 1--> */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={img} alt="" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {description.slice(0, 100)}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    <h3 className='mt-3 text-lg'>From: $ <span className='text-green-900 font-bold'>{price}</span></h3>
                </div>
                <Link to={`/booking/${_id}`}>
                    <button className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <span className='mx-auto'>Book Now</span>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Card;