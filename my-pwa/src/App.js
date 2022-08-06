import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [newItem, setNewItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>** Proyecto PWA - Lista de la compra v8 **</h1>
        <input style={{ fontSize: 24 }} type="text" onKeyPress={e => e.key === 'Enter' && addNewItem()} onChange={e => setNewItem(e.target.value)} value={newItem} />
        <button style={{ fontSize: 24 }} onClick={addNewItem}>Añadir</button>
        <ul>
          {items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
