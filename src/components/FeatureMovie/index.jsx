import './styles.css'

const FeatureMovie = ({ item, size }) => {
  const movieDate = new Date(item.first_air_date);
  const generos = item.genres.map((i) => i.name);
  let resume = item.overview
  if (resume.length > size) {
    resume = resume.substr(0, size).concat("...");
    console.log(resume);
  }

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(http://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{movieDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's' : ''}
            </div>
          </div>
          <div className='featured-description'>{resume}</div>
          <div className='featured-buttons'>
            <a className="featured-watchbutton" href={`/watch/${item.id}`}>
              ► Assistir
            </a>
            <a className="featured-mylistbutton" href={`/list/add/${item.id}`}>
              + Minha Lista
            </a>
          </div>
          <div className='featured-genres'>
            <strong>Gêneros: </strong> {generos.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureMovie
