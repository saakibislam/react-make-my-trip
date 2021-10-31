import React, { useRef, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../hooks/useAuth';

const Details = () => {
    const { locationId } = useParams();
    const [place, setPlace] = useState({});
    const { user } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const departureRef = useRef();
    const arrivalRef = useRef();

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${locationId}`)
            .then(res => res.json())
            .then(data => {
                setPlace(data);
            })
    }, [locationId, place])

    const { name, origin, price, thingsToDo, includes, description, img } = place;

    const reset = () => {
        nameRef.current.value = '';
        emailRef.current.value = '';
        departureRef.current.value = '';
        arrivalRef.current.value = '';
    }

    const handlePlaceOrder = () => {
        const order = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            destinationName: name,
            destinationPrice: price,
            destinationImg: img,
            departure: departureRef.current.value,
            arrival: arrivalRef.current.value
        }
        fetch('http://localhost:5000/placeorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        reset();
    }

    return (
        <div>
            <div className='m-5'>
                <h1 className='text-3xl'><span className='text-4xl text-indigo-600 font-bold'>{name}</span> is a nice place for a vacation.</h1>
                <h2 className='font-bold text-2xl text-green-700 mt-2'>{origin}</h2>
                <div className='bg-gray-100 flex lg:flex-column items-center mx-8 my-5 py-10 px-3'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='px-4'>
                        <div>
                            <h2 className='text-2xl my-5'>{name}</h2>
                            <p className='text-left'>{description}</p>
                        </div>
                        <div className='mt-8 flex flex-column justify-between'>
                            <div className='text-left'>
                                <h2 className='text-gray-500 font-semibold'>Things to do in {name}:</h2>
                                <ul className='mt-2'>
                                    {
                                        thingsToDo?.map(td => <li key={td} className='font-semibold'>{td}</li>)
                                    }
                                </ul>
                            </div>
                            <div>
                                <h2 className='text-gray-500 font-semibold'> Includes:</h2>
                                <ul className='mt-2'>
                                    {
                                        includes?.map(td => <li key={td} className='font-semibold'>{td}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <h3 className='mt-4 font-semibold text-xl'>Starts at : <span className='text-2xl text-green-800'>${price}</span></h3>

                    </div>
                </div>
                <div>
                    <h1 className='text-4xl my-5'>Place your order</h1>
                    <div className="container mx-auto">
                        <input className="block mx-auto my-2 p-2 w-1/4 border-2 rounded" type="text" defaultValue={user?.displayName} required ref={nameRef} />
                        <input className="block mx-auto my-2 p-2 w-1/4 border-2 rounded" type="email" defaultValue={user?.email} required ref={emailRef} />
                        <input className="block mx-auto my-2 p-2 w-1/4 border-2 rounded" type="text" placeholder="Departure Date (01-01-2021)" required ref={departureRef} />
                        <input className="block mx-auto my-2 p-2 w-1/4 border-2 rounded" type="text" placeholder="Arrival Date (31-12-2021)" required ref={arrivalRef} />
                    </div>
                    <Link to='/success'>
                        <button
                            onClick={handlePlaceOrder}
                            className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-10 border border-green-500 hover:border-transparent rounded mt-3 mb-8">
                            Submit
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;