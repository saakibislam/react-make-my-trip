import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1F2937', padding: '2.5rem', color: 'white', marginTop: '20px' }}>
            <div className='container my-10 mx-auto'>
                <div className='grid lg:grid-cols-12'>
                    <div className='col-span-9 lg:flex md:flex justify-around'>
                        <div className='mt-3'>
                            <h2 className='text-2xl'>Quick Links</h2>
                            <ul>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Testimonials</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl'>Products</h2>
                            <ul>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Testimonials</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl'>Features</h2>
                            <ul>
                                <li>About Us</li>
                                <li>Services</li>
                                <li>Testimonials</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-2xl'>Follow Us</h2>
                        </div>
                    </div>
                    <div className='col-span-3 mt-3'>
                        <h2 className='text-2xl'>Subscribe Newsletter</h2>
                        <input className='mt-2 border-2 rounded p-1' type="text" />
                        <input className='text-white font-bold bg-green-500 ml-2 mt-2 rounded p-1' type="submit" value="Subscribe" />
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <p className='mt-12'>Copyright ©2021 All rights reserved</p>
            </div >
        </div >
    );
};

export default Footer;