import '../../css/main.min.css';
import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useAppSelector} from '../../hooks/hooks-toolkit';
import {Fragment, useEffect, useState} from 'react';

function getCountPageFilms(countFilms: Film[]): number {
  if (countFilms.length > 8) {
    if (countFilms.length % 8 === 0) {
      return Math.floor(countFilms.length / 8 - 1);
    } else {
      return Math.floor(countFilms.length / 8);
    }
  } else {
    return 0;
  }
}

function FilmList() {
  const films = useAppSelector((state) => state.filmList.filmsByGenre);
  const [filmsArray, setFilmsArray] = useState(films);
  const [currentPage, setCurrentPage] = useState(1);
  let countPage = getCountPageFilms(films);

  useEffect(() => {
    setFilmsArray(films.slice(0, 8));
    setCurrentPage(1);
    countPage = getCountPageFilms(films);
  }, [films]);

  function handleClickCatalogButton() {
    if (currentPage + 1 === countPage) {
      setFilmsArray(films);
      setCurrentPage(currentPage + 1);
    } else if (currentPage + 1 !== countPage) {
      setCurrentPage(currentPage + 1);
      setFilmsArray(films.slice(0, (currentPage + 1) * 8));
    }
  }

  return (
    <Fragment>
      <div className="catalog__films-list">
        {
          filmsArray.map((filmItem: Film) => (
            <FilmCard key={filmItem.id} film={filmItem}/>
          ))
        }
      </div>
      {countPage !== currentPage ? (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleClickCatalogButton}>Show more</button>
        </div>
      ) : undefined}
    </Fragment>
  );
}

export default FilmList;
