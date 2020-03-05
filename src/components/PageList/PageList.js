import React from 'react';
import PageItem from '../PageItem';

const PageList = ({todos, onToggle, onRemove}) => {

    const list = todos.map((item, index) => (
        <PageItem
            key = {item.id} 
            onToggle={() => onToggle(item.id)}
            onRemove={() => onRemove(item.id)}
            isBold = {item.isBold}
        >
        {item.text}
        </PageItem>
        )
    );

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default PageList;