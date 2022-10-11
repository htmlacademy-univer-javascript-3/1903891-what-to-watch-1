import '../../css/main.min.css';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProp = {
  films: Film[],
};

function FilmList(props: FilmListProp) {
  const {films} = props;

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
