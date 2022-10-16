import '../../css/main.min.css';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useAppSelector} from '../../hooks/hooks-toolkit';

function FilmList() {
  const films = useAppSelector((state) => state.films.filmsByGenre);

  return (
    <div className="catalog__films-list">
      {
        films.map((filmItem: Film) => (
          <FilmCard key={filmItem.id} film={filmItem}/>
        ))
      }
    </div>
  );
}

export default FilmList;
