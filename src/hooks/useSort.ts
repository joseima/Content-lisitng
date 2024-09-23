import { Movie, Sort } from '../types'

export const sortMovies = (movies: Movie[], sort: Sort) => {
  return [...movies].sort((a, b) => {
    let fieldA: string | number = '';
    let fieldB: string | number = '';

    switch (sort.sort) {
      case 'title':
        fieldA = a.title.toLowerCase();
        fieldB = b.title.toLowerCase();
        break;
      case 'rating':
        fieldA = parseFloat(a.imdbRating);
        fieldB = parseFloat(b.imdbRating);
        break;
      case 'runtime':
        fieldA = parseInt(a.runtime);
        fieldB = parseInt(b.runtime);
        break;
      case 'year':
        fieldA = parseInt(a.year);
        fieldB = parseInt(b.year);
        break;
    }

    if (fieldA < fieldB) return sort.asc ? -1 : 1;
    if (fieldA > fieldB) return sort.asc ? 1 : -1;
    return 0;
  });
};
