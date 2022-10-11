import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://salty-shelf-73704.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => {
                setDestinations(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-5xl my-5'>Search for your desired place</h1>
            <div className='container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-10'>
                {
                    destinations.map(destination => <Card
                        key={destination._id}
                        destination={destination}></Card>)
                }
            </div>
        </div>
    );
};

export default Destinations;