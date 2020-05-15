import React from 'react';

const Conditional = () => {

    const value = false

    const returnValue = () => (
        true
    )

    const showIt = () => (
        returnValue() ? 'true value' : 'false value'
    )

    return (
        <div style={{
            padding : '40px 30px',
            borderBottom : '2px solid black'
        }}>
            {
                showIt()
            }
        </div>
    );
};

export default Conditional;