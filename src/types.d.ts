


  export interface Movie {
    imdbId: string
    title: string
    year: string
    runtime: string
    genres: string
    poster: string
    imdbRating: string
  }
  
  export interface Search {
    title: string
    minRuntime: number
    maxRuntime: number
    genres: string[]
  }
  export interface Sort {
    sort: string
    asc: boolean
  }
