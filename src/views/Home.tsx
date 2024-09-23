import { useSearch } from '../hooks/useSearch'
import { Header } from '../components/Header'
import { Search } from '../components/Search';
import { Movies } from '../components/Movies'

export const Home = () => {
  const {  displayedMovies,  loadMoreMovies, itemsFiltered } = useSearch();
  return (
    <>
      <Header />
      <Search/>
      <Movies movies={displayedMovies} itemsFiltered={itemsFiltered} loadMoreMovies={loadMoreMovies} />
    </>
  )
}