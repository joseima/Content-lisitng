import { createContext, useState, ReactNode } from 'react'
import {  Search, Sort } from '../types'


interface SearchContextType {
  search: Search
  setSearch: React.Dispatch<React.SetStateAction<Search>>
  sort: Sort
  setSort: React.Dispatch<React.SetStateAction<Sort>>
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC< SearchProviderProps > = ({ children }) => {
  const [search, setSearch] = useState<Search>({
    title: '',
    minRuntime: 60,
    maxRuntime: 300,
    genres: []
  })
  const [sort, setSort] = useState<Sort>({ sort: 'title', asc: true });

  return (
    <SearchContext.Provider value={{
      search,
      setSearch,
      sort,
      setSort
    }}
    >
      {children}
    </SearchContext.Provider>
  )
}
