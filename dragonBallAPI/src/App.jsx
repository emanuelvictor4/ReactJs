import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [data, setData] = useState(null);
  const baseUrl = 'https://dragonball-api.com/api';

  useEffect(() => {
    function loadingData() {
      fetch(`${baseUrl}/characters`)
        .then(response => response.json())
        .then(dadosApi => setData(dadosApi['items']))
        .catch(error => console.error('Error fetching data:', error)
        );
    }
    loadingData();
  }, []);



  return (
    <div className='container'>
      <h1>Dragon Ball Z</h1>
      {/*Vai Exibir os dados da API*/}
      <div className='dragon-container'>
        {data && (
          data.map((dragon) => (
            <div key={dragon.id} className='dragon-guerreiro'>
              <h2>{dragon.name}</h2>
              <img src={dragon.image} alt={dragon.name} />
              <div>
                <p>Raça: {dragon.race}</p>
                <p>Ki: {dragon.ki}</p>
                <details>
                  <summary>Descrição:</summary>
                  <p>{dragon.description}</p>
                </details>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
