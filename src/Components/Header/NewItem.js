import React from 'react';
import { css } from 'glamor'

const NewItem = ({item}) => {

    let news_item = css({
        padding : '20px',
        boxSizing : 'border-box',
        borderBottom : '1px solid #111'
    })

    let item_grey = css({
        background : 'lightgrey'
    })
    
    return (
        <div {...news_item} {...item_grey} >
            <h3>{item.title} </h3>
            <div className={`feed`}>
                {item.feed}
            </div>
        </div>
    );
};

export default NewItem;