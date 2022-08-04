import React, { useState } from 'react';
import useList from '../../hooks/useList';

const Tasklist = () => {
    const tasks = useList([]);
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        tasks.push(newTask);
        setNewTask('');
    };

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleClearAll = (event) => {
        event.preventDefault();
        tasks.clearAll();
    };

    const handleSortList = () => {
      tasks.sortList();
      setNewTask(null);
    };

    const handleReverse = () => {
      tasks.reverse();
      setNewTask();
    };

    return (
      <div>
        <h1>
          Task List
        </h1>
        <form onSubmit={handleSubmit}>
          <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
          <button type="submit">Create Task</button>
        </form>
        <button type="button" onClick={handleClearAll}>Clear Tasks</button>
        <button type="button" onClick={handleSortList}>Sort Tasks</button>
        <button type="button" onClick={handleReverse}>Reverse Tasks</button>

        { tasks.isEmpty()
            ? (<p>Task List is Empty</p>)
            : (
              <ul>
                {tasks.value.map((task, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      onChange={() => tasks.remove(index)}
                      checked={false}
                      value="value"
                    />
                    { task }
                  </li>
                        ))}
              </ul>
            )}
      </div>
    );
};

export default Tasklist;
