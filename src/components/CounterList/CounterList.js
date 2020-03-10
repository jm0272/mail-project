import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../Counter';

const CounterList = ({ counters, increment, decrement, setColor }) => {

    const counterList = counters.map( (counter, index) => {
        return (
            <Counter
                key={index}
                index = {index}
                {...counter}
                setColor = {setColor}
                increment = {increment}
                decrement = {decrement}
            >
            {counter.number}
            </Counter>
        );
    
    });

    return (
        <div>
            {counterList}
        </div>
    )

};

CounterList.prototype = {
    counters : PropTypes.arrayOf(PropTypes.shape({color:PropTypes.string, number:PropTypes.number})),
    increment : PropTypes.func,
    decrement : PropTypes.func,
    setColor : PropTypes.funcr
};

CounterList.defaultProps = {
    counters : [],
    increment : () => (console.log('increment')),
    decrement : () => (console.log('decrement')),
    setColor : () => (console.log('set color'))
};

export default CounterList;