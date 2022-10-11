import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import banner from '../../images/banner.jpg';
import './Home.css'

const Home = () => {
    const [places, setPlaces] = useState();
    useEffect(() => {
        fetch('https://salty-shelf-73704.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setPlaces(data.slice(6, 14)))
    }, [])
    return (
        <div>
            {/* Heading  */}
            <div className="main-div">
                <div className='container mx-auto fade-in-text'>
                    <h1 className='main-text'>Let us take you away</h1>
                </div>
            </div>
            {/* Banner  */}
            <div>
                <img src={banner} alt="" />
            </div>

            {/* Card Container  */}
            <div>
                <h1 className='text-4xl mt-12 mb-5'>Most Visited Place</h1>
                <hr className='border-solid border border-green-700 w-20 mx-auto mb-5' />
                <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 px-8'>
                    {
                        places?.map(place => <Card key={place._id} destination={place}></Card>)
                    }
                </div>
            </div>

            {/* Latest Blog Section  */}
            <div className='mt-20 mb-8 text-4xl bg-purple-300 container mx-auto rounded py-3'>
                <h1>Latest Blogs</h1>
                <div className='container mx-auto grid lg:grid-cols-12 md:grid-cols-2 gap-4 px-8 my-8'>

                    {/* Card 1  */}
                    <div className=" w-full lg:max-w-full lg:flex col-span-6">
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80')" }} title="Advisories">
                        </div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-gray-900 font-bold text-xl mb-2">15 Key Travel Advisories Announced in October</div>
                                <p className="text-gray-700 text-base">The U.S. State Department was once again hard at work assessing the potential threats to American travelers abroad in the month of October.</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-full mr-4" src="https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/3e0b85da-aeda-d4ba-6c80-a623d0cd0c98/195x178.jpg" alt="Avatar of Writer" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Patrick Clarke</p>
                                    <p className="text-gray-600">Oct 30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card 2  */}
                    <div className="w-full lg:max-w-full lg:flex col-span-6">
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')" }} title="Hotels">
                        </div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">

                                <div className="text-gray-900 font-bold text-xl mb-2">Discover the BEST of Burj Al Arab</div>
                                <p className="text-gray-700 text-base">Burj Al Arab takes hotel design to a new level of modern luxury, and has also redefined the meaning of exceptional hospitality, both in Dubai and around the world.</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-full mr-4" src="https://www.hospitalitynet.org/picture/153122420/ermanno-zanini.jpg?t=1609851050" alt="Avatar of Writer" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Ermanno Zanini</p>
                                    <p className="text-gray-600">Aug 10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News for Travelers  */}
            <div className='mt-20 mb-8 bg-red-200 container mx-auto rounded p-5'>
                <h1 className='text-4xl mt-5 pb-3'>News for World Wide Travelers</h1>
                <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                    {/* <!-- media --> */}
                    <div className="h-64 w-auto md:w-1/2">
                        <img className="inset-0 h-full w-full object-cover object-center" src="https://www.breakingtravelnews.com/images/sized/images/uploads/miscellaneous/Ain_Dubai_-_opening_-_NS_1-410x250.jpg" alt="" />
                    </div>
                    {/* <!-- content --> */}
                    <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                        <h3 className="font-semibold text-xl leading-tight truncate">Ain Dubai welcomes first guests in Middle East</h3>
                        <p className="mt-2">
                            Ain Dubai, the largest and tallest observation wheel in the world, has welcomed its first visitors.

                            The inaugural rotation took place at 14:00 for eager guests who had pre-booked to experience a 38-minute rotation in the state-of-the-art cabins.
                        </p>
                        <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                            breakingtravelnews.com &bull; 6 days ago
                        </p>
                    </div>
                </div>
            </div>

            {/* Get Started Banner  */}
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 my-5 lg:p-24 md:p-12 p-6' style={{ backgroundColor: '#00918E' }}>
                <div>
                    <h1 className='text-4xl text-white text-left'>Lets get Started. Create your account.</h1>
                    <p className='text-white text-left mt-6 mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div>
                    <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-green-800 py-4 px-8 border border-white rounded mx-2 text-xl">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Home;