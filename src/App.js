import React, { useEffect, useState } from 'react'
import HomeList from './database/tmdb';
import MovieRow from './components/MovieRow';
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
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
