import '../../css/main.min.css';
import FilmCardPreview from '../film-card-preview/film-card-preview';
import {Film} from '../../types/film';

type filmCardHeroProp = {
  film: Film
};

function FilmCardHero(props: filmCardHeroProp) {
  const {film} = props;

  return (
    <div className="film-card__hero">
      <FilmCardPreview film={film}/>
    </div>
  );
}

export default FilmCardHero;
