import React from 'react';
import Jotform from 'react-jotform';
const Form = () => {
    return (
        <>
            <Jotform
                src="https://form.jotform.com/230884468422462"
                defaults={{
                    name: 'John',
                }}
            />
        </>
    );
};

export default Form;
