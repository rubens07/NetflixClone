import React, { useEffect, useState } from 'react'
import HomeList from './database/tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeatureMovie from './components/FeatureMovie';
import Header from './components/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  const loadData = async () => {
    const dados = await HomeList.getHomeList();
    setMovieList(dados);

    let chosenInfo = {backdrop_path: null}
    while (!chosenInfo.backdrop_path) {
      const originals = dados.find((i) => i.slug === 'originals');
      const random = Math.floor(Math.random() * (originals.items.results.length - 1));
      const chosen = originals.items.results[random];
      chosenInfo = await HomeList.getMovieInfo(chosen.id, 'tv');
    }

    setFeatureData(chosenInfo);
  }

  const checkScroll = () => {
    const scrollListener = () => {
      if(window.scrollY > 100) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }

  useEffect(() => {
    loadData();
    checkScroll();
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader}/>

      {featureData &&
        <FeatureMovie item={featureData} size={300} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Feito com <span role="img" aria-label="coração">♥</span><br/>
        Direitos de imagem para <a href="https://www.netflix.com/br/">Netflix</a><br/>
        Dados obtidos no site <a href="https://www.themoviedb.org/">TMDB</a>
      </footer>

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="netflix-loading.gif" alt="Carregando" />
        </div>
      }
    </div>
  );
}

export default App;
