import {useState} from 'react';
import FilmCard from '../film-card/film-card';

import '../../css/main.min.css';
import {Film} from '../../types/film';

type FilmListProp = {
  films: Film[]
};

function FilmList(props: FilmListProp) {
  const {films} = props;
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="catalog__films-list">
      {
        films.map((film: Film) => (
          <FilmCard key={film.id} film={film} onMouseOverHandler={(e: any) => {
            e.preventDefault();
            setActiveCard(film.id);
          }}
          />
        ))
      }
    </div>
  );
}

export default FilmList;
