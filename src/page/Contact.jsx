import React from 'react';
import Jotform from 'react-jotform';

const Contact = () => {
    return (
        <div className="container">
            <h1 className=" text-center my-5">
                At AdsGrowMedia, we are committed to providing exceptional
                customer service and support. If you have any questions or would
                like to schedule a consultation, please contact us by filling
                form below:
            </h1>
            <Jotform
                src="https://form.jotform.com/230884468422462"
                defaults={{
                    name: 'John',
                }}
            />
        </div>
    );
};

export default Contact;
