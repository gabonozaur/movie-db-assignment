export interface MovieDTO {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: string;
}

export interface MoviesProps {
  movies: MovieDTO[];
  removeFromFavorites?: boolean;
  onChangeFavorite?: () => void;
  hideGetMore?: boolean;
  onFetchMore?: () => void;
}
