import React from 'react';
import NewItem from './NewItem'

const NewList = (props) => {
    
    const items = props.news.map((item) => (
        <NewItem key={item.id} item={item} />
    ))

    return (
        <div>
            {items}
        </div>
    );
};

export default NewList;