import {useState} from 'react';
import FilmCard from '../film-card/film-card';

import '../../css/main.min.css';
import {Film} from '../../types/film';

type FilmListProp = {
  films: Film[]
};

function FilmList(props: FilmListProp) {
  const {films} = props;
  const [activeCard, setActiveCard] = useState(-1);

  return (
    <div className="catalog__films-list">
      {
        films.map((film: Film) => (
          <FilmCard
            key={film.id}
            film={film}
            isActive={activeCard === film.id}
            onMouseOverHandler={(e: any) => {
              e.preventDefault();
              setActiveCard(film.id);
            }}
            onMouseLeaveHandler={(e: any) => {
              e.preventDefault();
              setActiveCard(-1);
            }}
          />
        ))
      }
    </div>
  );
}

export default FilmList;
