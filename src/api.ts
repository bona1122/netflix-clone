const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_PATE = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}
export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATE}/movie/now_playing?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
}
