import React from 'react';

const News = () => {
    return (
        <div>
            <div className="pt-6 pb-12 bg-gray-300">
                <div id="card" className="">
                    <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">Recent Articles</h2>
                    {/* <!-- container for all cards --> */}
                    <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
                        {/* <!-- card --> */}
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                            {/* <!-- media --> */}
                            <div className="h-64 w-auto md:w-1/2">
                                <img className="inset-0 h-full w-full object-cover object-center" src="https://www.breakingtravelnews.com/images/sized/images/uploads/tourism/Cayman_Islands_-_NS_2021-410x250.jpg" alt="" />
                            </div>
                            {/* <!-- content --> */}
                            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                <h3 className="font-semibold text-lg leading-tight truncate">Cayman Islands to reopen to tourism next month</h3>
                                <p className="mt-2">
                                    The Cayman Islands has announced that it is moving to phase four of its reopening plan.

                                    Vaccinated travellers who are securely verified can enter without quarantine from November 20th.

                                    After almost two years with limited international travel, many travellers are now looking to winter sun destinations for their next therapeutic escape.

                                    “The health and security of our residents and visitors have always been the government’s number one priority, and our Covid-19 experience throughout the pandemic has been exemplary to date.
                                </p>
                                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                    Cayman Islands &bull; 2 days ago
                                </p>
                            </div>
                        </div>
                        {/* <!-- card --> */}
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                            {/* <!-- media --> */}
                            <div className="h-64 w-auto md:w-1/2">
                                <img className="inset-0 h-full w-full object-cover object-center" src="https://www.breakingtravelnews.com/images/sized/images/uploads/tourism/Tel_Aviv_-_Israel_-_NS_2020-410x250.jpg" alt="" />
                            </div>
                            {/* <!-- content --> */}
                            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                <h3 className="font-semibold text-lg leading-tight truncate">Israel to reopen to vaccinated tourists</h3>
                                <p className="mt-2">
                                    The Israel ministry of tourism has announced that the country will be accepting individually vaccinated tourists from November 1st.

                                    Tourism minister, Yoel Razvozov, confirmed entry will be subject to proof of vaccination.

                                    Razvozov congratulated prime minister, Naftali Bennett, and health minister, Nitzan Horowitz, and said: “This is not the end of the struggle, but only the beginning.
                                </p>
                                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                    breakingtravelnews.com &bull; 3 days ago
                                </p>
                            </div>
                        </div>
                        {/* <!-- card --> */}
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                            {/* <!-- media --> */}
                            <div className="h-64 w-auto md:w-1/2">
                                <img className="inset-0 h-full w-full object-cover object-center" src="https://www.breakingtravelnews.com/images/sized/images/uploads/airline/Lufthansa_-_Covid-19_2-410x250.jpg" alt="" />
                            </div>
                            {/* <!-- content --> */}
                            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                <h3 className="font-semibold text-lg leading-tight truncate">Airlines to check vaccination status as US borders reopen</h3>
                                <p className="mt-2">
                                    Officials in the United States have outlined new rules for foreign travellers, as flight restrictions lift for the first time since the pandemic began in early 2020.

                                    Borders will reopen on November 8th, with the White House giving more information on who will be allowed to travel.

                                    A statement confirmed a requirement that almost all foreign visitors be vaccinated against Covid-19.
                                </p>
                                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                    breakingtravelnews.com &bull; 5 days ago
                                </p>
                            </div>
                        </div>
                        {/* <!-- card --> */}
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                            {/* <!-- media --> */}
                            <div className="h-64 w-auto md:w-1/2">
                                <img className="inset-0 h-full w-full object-cover object-center" src="https://www.breakingtravelnews.com/images/sized/images/uploads/John_Cena_-_Abu_Dhabi_-_NS_1-410x250.jpg" alt="" />
                            </div>
                            {/* <!-- content --> */}
                            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                <h3 className="font-semibold text-lg leading-tight truncate">Abu Dhabi signs John Cena for new tourism campaign</h3>
                                <p className="mt-2">
                                    Not to be outdone by rivals up the road in Dubai, the Department of Culture and Tourism - Abu Dhabi (Abu Dhabi Tourism) has hired John Cena for a new tourism campaign.

                                    The work encourages travellers to book a trip to the United Arab Emirates’ capital – stat.

                                    Following the teaser video launched last week, the full film sees Cena abandoning his travel plans after reading about Abu Dhabi on his flight – highlighting exactly why the ‘Time is Now’ to visit.
                                </p>
                                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                    breakingtravelnews.com &bull; 6 days ago
                                </p>
                            </div>
                        </div>
                        {/* <!-- card --> */}
                        <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                            {/* <!-- media --> */}
                            <div className="h-64 w-auto md:w-1/2">
                                <img className="inset-0 h-full w-full object-cover object-center" src="https://www.breakingtravelnews.com/images/sized/images/uploads/miscellaneous/Ain_Dubai_-_opening_-_NS_1-410x250.jpg" alt="" />
                            </div>
                            {/* <!-- content --> */}
                            <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                <h3 className="font-semibold text-lg leading-tight truncate">Ain Dubai welcomes first guests in Middle East</h3>
                                <p className="mt-2">
                                    Ain Dubai, the largest and tallest observation wheel in the world, has welcomed its first visitors.

                                    The inaugural rotation took place at 14:00 for eager guests who had pre-booked to experience a 38-minute rotation in the state-of-the-art cabins.

                                    The first rotation also included the lucky winners of the Ain Dubai treasure hunt around Bluewaters competition held earlier this month.

                                    After the sun set, the captivating wheel lit up the sky with a mesmerising light, drone and fireworks show as the world watched the momentous occasion.
                                </p>
                                <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                    breakingtravelnews.com &bull; 6 days ago
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <!--/ flex--> */}
                </div>
            </div>
        </div>
    );
};

export default News;