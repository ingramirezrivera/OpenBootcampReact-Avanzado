import { useState } from 'react';

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);
    const [steps, setSteps] = useState(1);

    const increment = () => setCount(
        (count === 20) ? count : (count + steps),
        );
    const decrement = () => setCount(
        (count === -20) ? count : (count - steps),
        );
    const reset = () => setCount(0);

    const step = () => setSteps((steps === 3) ? 1 : steps + 1);

    return {
        count, increment, decrement, reset, step, steps,
    };
};

export default useCounter;
