import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold my-5">About Us</h1>
            <div className='container mx-auto grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 px-16 mt-12'>
                <div className='col-span-6'>
                    <img src="https://images.unsplash.com/photo-1609861517208-e5b7b4cd4b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" alt="" />
                </div>
                <div className='col-span-6'>
                    <h2 className='text-3xl font-semibold my-3'>Why choosing us?</h2>
                    <p className='text-justify mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis sed tempore, ea fugiat eos, quod dolore amet dignissimos exercitationem officia beatae officiis labore qui eveniet nisi, voluptatum obcaecati eaque? Soluta quis autem eum amet labore architecto, assumenda modi ipsam earum. Adipisci numquam aspernatur id, repellendus accusamus officia nulla? Ullam!</p>
                </div>
            </div>
        </div>
    );
};

export default About;