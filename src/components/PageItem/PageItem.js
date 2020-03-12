import React, { Component } from 'react';

/* const PageItem = ({ onToggle, onRemove, children, isBold }) => {
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
} */

class PageItem extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.isBold !== nextProps.isBold;
    }

    render() {
        const { onToggle, onRemove, children, isBold } = this.props;
        return (
            <div>
                <em
                    onClick={onToggle}
                    style={{color:isBold ? '#00FF00':'#FF0000'}}
                >
                {children}
                </em>
                <button
                    onClick={onRemove}
                >
                    삭제
                </button>
            </div>
        );
    }
    
}

export default PageItem;