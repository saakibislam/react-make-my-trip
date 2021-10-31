import React from 'react';

const Blog = () => {
    return (
        <div className='my-5'>
            <h1 className='text-4xl'>Latest Blogs</h1>
            <div>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
                    {/* <!--Card 1--> */}
                    <div className=" w-full lg:max-w-full lg:flex">
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
                    {/* <!--Card 2--> */}
                    <div className="w-full lg:max-w-full lg:flex">
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
                    {/* <!--Card 3--> */}
                    <div className="w-full lg:max-w-full lg:flex">
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')" }} title="Forest">
                        </div>
                        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <div className="text-gray-900 font-bold text-xl mb-2">5 National Forests across the U.S.</div>
                                <p className="text-gray-700 text-base">Under the U.S. Forest Service, the National Forest System now helps preserve hundreds of millions of acres, but we did not always have careful guidelines to help protect such places from harm.</p>
                            </div>
                            <div className="flex items-center">
                                <img className="w-10 h-10 rounded-full mr-4" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" alt="Avatar of Writer" />
                                <div className="text-sm">
                                    <p className="text-gray-900 leading-none">Mason Cummings</p>
                                    <p className="text-gray-600">Aug 9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;