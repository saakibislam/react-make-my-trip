import React from 'react';
import OrderTable from '../../components/OrderTable';

const Orders = () => {
    return (
        <div className='my-8'>
            <h1 className='text-4xl'>Manage Orders</h1>
            <div className='container mx-auto px-4'>
                <OrderTable></OrderTable>
            </div>
        </div>
    );
};

export default Orders;