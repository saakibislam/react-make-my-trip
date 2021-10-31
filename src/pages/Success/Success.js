import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-6xl text-green-500'>Order Successful</h1>
            <img className='mx-auto w-1/4' src="https://image.freepik.com/free-vector/online-ordering-purchase-making-buying-goods-internet-store-website-female-customer-with-tablet-adding-product-cart-cartoon-character_335657-2561.jpg" alt="" />
            <Link to='/home'>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center">
                    Home
                    <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </Link>
        </div>
    );
};

export default Success;