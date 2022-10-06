import {FilmCardInfo} from './film-card-info';

export type Film = {
  id: number,
  backgroundImage: string,
  backgroundColor: string,
  rating: number,
  scoresCount: number,
  runTime: number,
  isFavorite: boolean,
  filmCardInfo: FilmCardInfo,
}
