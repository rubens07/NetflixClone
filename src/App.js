import React, { useEffect } from 'react'
import HomeList from './database/tmdb';
import './App.css';

function App() {
  useEffect(() => {
    const dados = HomeList.getHomeList();
    console.log(dados);
  }, []);

  return (
    <div className="App">
     Hello World!
    </div>
  );
}

export default App;
