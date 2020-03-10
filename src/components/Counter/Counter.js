import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ index, number, color, increment, decrement, setColor }) => {

    return (
        <div>
            <div
                className="Counter"
                onClick={() => increment(index)}
                onDoubleClick={() => setColor(index, color)}
                onContextMenu={
                    (e)=>{
                        e.preventDefault();
                        decrement(index);
                    }
                }
                style={
                    {backgroundColor:color}
                }
                >
                {number}
            </div>
        </div>
    )

};

Counter.prototype = {
    index : PropTypes.number,
    number : PropTypes.number,
    color : PropTypes.string,
    increment : PropTypes.func,
    decrement : PropTypes.func,
    setColor : PropTypes.funcr
};

Counter.defaultProps = {
    index : 0,
    number : 0,
    color : '#00FF00',
    increment : () => (console.log('increment')),
    decrement : () => (console.log('decrement')),
    setColor : () => (console.log('set color'))
};

export default Counter;