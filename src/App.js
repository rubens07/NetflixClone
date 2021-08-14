import React, { useEffect, useState } from 'react'
import HomeList from './database/tmdb';
import './App.css';

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    HomeList.getHomeList()
      .then((dados) => {
        setMovieList(dados);
      })
  }, []);

  return (
    <div className="App">
     Hello World!
    </div>
  );
}

export default App;
