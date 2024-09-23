import './Search.css'
import { useSearch } from '../hooks/useSearch'
import { useState } from 'react'

export const Search: React.FC = () => {
  const { search, setSearch } = useSearch()
  const [title, setTitle] = useState(search.title)
  const [minRuntime, setMinRuntime] = useState(search.minRuntime)
  const [maxRuntime, setMaxRuntime] = useState(search.maxRuntime)
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  
  

  const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const genre = event.target.id;
    if (event.target.checked) {
      setSelectedGenres([...selectedGenres, genre]); 
    } else {
      setSelectedGenres(selectedGenres.filter(g => g !== genre)); 
    }
  };


  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearch((prevState) => ({
      ...prevState,
      title: title,  
      minRuntime: minRuntime, 
      maxRuntime: maxRuntime, 
      genres: selectedGenres 
    }))
  }

  return (
    <section className='filters'>
      <form className='form' onSubmit={handleSearchSubmit}>
        <div>
          <label htmlFor='title'>Search by title</label>
          <input
            type='text'
            id='title'
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>

        <div>
          <label htmlFor="minRuntime">Minimum duration</label>
          <input
            type='range'
            id='minRuntime'
            min='10'
            max='300'
            value={minRuntime} 
            onChange={(e) => setMinRuntime(Number(e.target.value))} 
          />
          <span>{minRuntime}  minutes</span>
        </div>
        <div>
          <label htmlFor="maxRuntime">Maximum duration</label>
          <input
            type='range'
            id='maxRuntime'
            min='10'
            max='300'
            value={maxRuntime} 
            onChange={(e) => setMaxRuntime(Number(e.target.value))} 
          />
          <span>{maxRuntime} minutes</span>
        </div>
        <fieldset>
          <legend>Genres</legend>
          {[ 'Fantasy', 'Comedy', 'Thriller', 'Sci-Fi', 'Animation', 'Crime', 'Western', 'Horror', 'Action'].map((genre) => (
            <div className='genre' key={genre}>
              <input
                type='checkbox'
                id={genre}
                name='genre'
                onChange={handleGenreChange} 
              />
              <label htmlFor={genre}>{genre}</label>
            </div>
          ))}
        </fieldset>

        <button type='submit'>Update your search</button>
      </form>
    </section>
  );
};