import React from 'react';

const PageItem = ({ onToggle, onRemove, children, isBold }) => {
    return (
        <li
            onDoubleClick={onRemove}
            onClick={onToggle}
            // style={isBold ? 'color:#FF0000':'color:#00FF00'}
            //style={{color:'#00FF00'}}
            style={{color:isBold ? '#00FF00':'#FF0000'}}
        >
        {children}
        </li>
    )
}

export default PageItem;