import {  Movie } from '../types'

export const getItems = async (): Promise<Movie[]> => {
  try {
    const resp = await fetch('/data/final_movies.json') 
    if (!resp.ok) {
      throw new Error(`Error fetching data: ${resp.status} ${resp.statusText}`)
    }
    const json: Movie[] = await resp.json()
    return json.map(item => ({
      imdbId: item.imdbId,
      title: item.title,
      year: item.year,
      runtime: item.runtime,
      genres: item.genres,
      poster: item.poster,
      imdbRating: item.imdbRating
    }));
  } catch (error) {
    console.error('Error fetching items:', error)
    throw error; 
  }
} 