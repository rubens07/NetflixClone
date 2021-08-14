import React from 'react'
import './styles.css'

const MovieRow = ({ title, items }) => {
  console.log(items.results);
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-listarea">
        <div className="movieRow-list">
          {items.results.length > 0 && items.results.map((movie, index) => (
            <div className="movieRow-item">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
                alt={movie.original_title}
                title={movie.name}
              />
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default MovieRow;
