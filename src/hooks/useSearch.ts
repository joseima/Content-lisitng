import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/search'
import { Movie } from '../types'
import { getItems } from "../utils/services";
import { sortMovies } from "../hooks/useSort"; 

export const useSearch = () => {
  const [fetchedItems, setFetchedItems] = useState< Movie[]>([])
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
  const [itemsToShow, setItemsToShow] = useState<number>(30); 
  const [itemsFiltered, setItemsFiltered] = useState<number>(0); 
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  const { search, setSearch, sort, setSort } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newItems = await getItems();
        setFetchedItems(newItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchData();
  }, []);



  const filterMovies = (movies: Movie[]) => {
    return movies.filter(movie => {
      const movieGenres = movie.genres.split(',').map(genre => genre.trim().toLowerCase())
      const matchesGenres = search.genres.every(genre => movieGenres.includes(genre.toLowerCase()))
  
      return (
        movie.title.toLowerCase().includes(search.title.toLowerCase()) && 
        parseInt(movie.runtime) >= search.minRuntime &&
        parseInt(movie.runtime) <= search.maxRuntime &&
        matchesGenres
      );
    });
  };


  useEffect(() => {
    const filteredMovies = filterMovies(fetchedItems);
    setItemsFiltered(filteredMovies.length);
    const newFilteredMovies = sortMovies(filteredMovies, sort)
    const newSortedMovies = newFilteredMovies.slice(0, itemsToShow)
    setDisplayedMovies(newSortedMovies)
  }, [search, fetchedItems, itemsToShow, sort]);
 

  const loadMoreMovies = () => {
    setItemsToShow(prev => prev + 30);
  };
  return { search, displayedMovies, setSearch, loadMoreMovies, itemsFiltered, sort, setSort };
}
