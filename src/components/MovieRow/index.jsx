import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './styles.css'

const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    // percorre metade da tela do dispositivo
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0){
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    // tamanho total da lista de filmes
    const listW = items.results.length * 175;
    const dif = window.innerWidth - listW;
    if (x < dif) {
      x = dif - 60; // 30px de padding na direita e 30px na esquerda
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-left">
        <NavigateBeforeIcon
          style={{fontSize: 50}}
          onClick={handleLeftArrow}
        />
      </div>
      <div className="movieRow-right">
        <NavigateNextIcon
          style={{fontSize: 50}}
          onClick={handleRightArrow}
        />
      </div>
      <div className="movieRow-listarea">
        <div className="movieRow-list" style={{ marginLeft: scrollX }}>
          {items.results.length > 0 && items.results.map((movie, index) => {
            if (movie.poster_path) {
              return (
                <div className="movieRow-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                    alt={movie.original_title}
                    title={movie.name}
                  />
                </div>
              );
            } else return null;
          })
        }
      </div>
      </div>
    </div>
  );
}

export default MovieRow;
