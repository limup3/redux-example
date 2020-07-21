import React from 'react';
const CounterComponent = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <h1>숫자 : {number}</h1><b/>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};
export default CounterComponent;