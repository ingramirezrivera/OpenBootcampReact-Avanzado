import React from 'react';
import useCounter from '../../hooks/useCounter';

const Counter = ({ initialCount }) => {
  // eslint-disable-next-line object-curly-newline
  const { count, increment, decrement, reset, step, steps } = useCounter(initialCount);

    return (
      <div>
        <h1>Counter</h1>
        { count }
        <button type="button" onClick={increment}>Increment</button>
        <button type="button" onClick={reset}>Reset</button>
        <button type="button" onClick={decrement}>Decrement</button>
        <button type="button" onClick={step}>
          Steps x
          { steps }
        </button>
      </div>
    );
};

export default Counter;
