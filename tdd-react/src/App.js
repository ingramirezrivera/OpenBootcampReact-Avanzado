import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { IoPlay } from 'react-icons/io5'


function App() {
  const [busqueda, setBusqueda] = useState('');
  const [listado, setListado] = useState([]);

  const hazBusqueda = () => {
    const url = `https://de1.api.radio-browser.info/json/stations/byname/${busqueda}`;
    axios.get(url)
      .then(res => setListado(res.data))
      .catch(e => console.log(e));

  }

  const playRadio = (radio) => {
    const audio = new Audio(radio.url)
    audio.play();
  }

  return (
    <div className="App">
      <h1>Bienbenido a la aplicación <span>OpenRadioCamp</span></h1>
      <input  type='text' placeholder='Escribe el nombre de la radio' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} onKeyPress={e => e.key === 'Enter' && hazBusqueda()}/>
      <button onClick={hazBusqueda}>Buscar </button>
        {listado.length > 0 && <div aria-label='length-not-null'></div>}
      <section aria-label='listado-emisoras'>
        {listado.map((emisora,i) => <li key={i}>{emisora.name} <IoPlay onClick={() => playRadio(emisora)} style={{cursor: 'pointer'}}/></li>)}
      </section>
    </div>
  );
}

export default App;
