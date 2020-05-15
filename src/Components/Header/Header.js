import React from 'react';

const Header = (props) => {

    return (
        <div className="Header">
            <div className="logo">Logo</div>
            <input type="text" onChange={props.keywords} />
            
        </div>
    );
};

export default Header;

