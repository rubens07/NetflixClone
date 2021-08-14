import React, { useEffect, useState } from 'react'
import HomeList from './database/tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeatureMovie from './components/FeatureMovie';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  const loadData = async () => {
    const dados = await HomeList.getHomeList();
    setMovieList(dados);

    const originals = dados.find((i) => i.slug === 'originals');
    const random = Math.floor(Math.random() * (originals.items.results.length - 1));
    const chosen = originals.items.results[random];
    const chosenInfo = await HomeList.getMovieInfo(chosen.id, 'tv');

    setFeatureData(chosenInfo);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="page">
      {featureData &&
        <FeatureMovie item={featureData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
