import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState(initialValue);
    // eslint-disable-next-line no-console
    console.log(value);

    // Push new value to list
    const push = (element) => {
        setValue((oldValue) => [...oldValue, element]);
    };

    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // Clear all
    const clearAll = () => {
        setValue([]);
    };

    // Sort the list
    const sortList = () => {
        setValue((oldValue) => oldValue.sort((a, b) => a - b));
    };

    const reverse = () => {
        setValue((oldValue) => oldValue.sort((a, b) => b - a));
    };

    // List is Empty ? true / false
    const isEmpty = () => value.length === 0;

    // TODO:Develop more functions for lists

    return {
            value, setValue, push, remove, isEmpty, clearAll, sortList, reverse,
        };
};

export default useList;
