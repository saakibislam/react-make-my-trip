import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold my-5">Contact Us</h1>
            <div className="container mx-auto">
                <input className="block mx-auto my-2 p-2 w-2/4 border-2 rounded" type="text" placeholder="Your Email" required />
                <input className="block mx-auto my-2 p-2 w-2/4 border-2 rounded" type="text" placeholder="Subject" />
                <textarea className="block mx-auto my-2 p-2 w-2/4 border-2 rounded" style={{ height: '250px' }} placeholder="Leave your message here" id="floatingTextarea"></textarea>
            </div>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-10 border border-green-500 hover:border-transparent rounded mt-3 mb-8">
                Submit
            </button>
        </div>
    );
};

export default Contact;