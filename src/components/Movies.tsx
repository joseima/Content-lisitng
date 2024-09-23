import './Movies.css';
import { Movie } from '../types';
import { IMDB_URL } from '../utils/url';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { ImageHolder } from '../utils/icons'

interface MoviesProps {
  movies: Movie[]; 
  loadMoreMovies: () => void;
  itemsFiltered: number;
}

export const Movies: React.FC<MoviesProps> = ({ movies, loadMoreMovies, itemsFiltered }) => {

  const imgRefs = useLazyLoad(movies);

  return (
    <>
      <section className='movies'>
        <p className='showing'>
          Showing <b>{movies.length}</b> from <b>{itemsFiltered}</b> results
        </p>
        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={movie.imdbId}>
                <a
                  href={`${IMDB_URL}${movie.imdbId}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img 
                      ref={el => imgRefs.current[index] = el} 
                      data-src={movie.poster} 
                      alt={movie.title}
                      src='imageHolder.png'
                  />
                  <h3>{movie.title}</h3>
                  <div className='genres'>
                    <p>{movie.genres}</p>
                  </div>
                  <div className='details'>
                  <p className='movieRating'>&#9733; {movie.imdbRating}</p>
                    <h5>{movie.year}</h5>
                  </div>
                  <div className='details'>
                    <p>Duration: {movie.runtime} mins</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
        <div className='buttonsSection'>
          <button onClick={loadMoreMovies}>Load More Movies</button>
          <a href='#top'><button>Back to top</button></a>
        </div>
      </section>
    </>
  );
};
