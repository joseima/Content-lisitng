import './Sort.css';
import { useSearch } from '../hooks/useSearch'; 

export const Sort: React.FC = () => {
  const { sort, setSort } = useSearch(); 

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort((prevState) => ({
      ...prevState,
      sort: String(event.target.value),
    }));
  };

  const toggleAsc = () => {
    setSort((prevState) => ({
      ...prevState,
      asc: !prevState.asc,
    }));
  };

  return (
    <section className='sort'>
      <div>
        <label htmlFor='sortBy'>Sort by</label>
        <select id='sortBy' value={sort.sort} onChange={handleChangeSort}>
          <option value='title'>Title</option>
          <option value='rating'>Rating</option>
          <option value='runtime'>Runtime</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div>
        <button className={sort.asc ? 'ascendent' : 'descendent'} onClick={toggleAsc}>
          {sort.asc ? 'Asc' : 'Desc'}
        </button>
      </div>
    </section>
  );
};
