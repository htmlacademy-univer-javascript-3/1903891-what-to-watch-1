import {Fragment, useEffect} from 'react';

import Footer from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import GenreList from '../../components/genre-list/genre-list';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import LoadingScreen from '../loading-screen/loading-screen';
import {getPromoFilm} from '../../store/api-actions';
import FilmCardDescription from '../../components/film-card-description/film-card-description';
import FilmCardHeaderDescription from '../../components/film-card-header-description/film-card-header-description';

function GeneralScreen() {
  const isDataFilmListLoading = useAppSelector((state) => state.filmList.isDataFilmListLoading);
  const filmPromo = useAppSelector((state) => state.filmCard.filmByID);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPromoFilm());
  }, []);

  if (isDataFilmListLoading) {
    return (<LoadingScreen/>);
  }

  return (
    <Fragment>
      <section className="film-card">
        {
          filmPromo && (
            <>
              <FilmCardHeaderDescription film={filmPromo}/>
              <div className="film-card__wrap">
                <div className="film-card__info">
                  <div className="film-card__poster">
                    <img src={filmPromo?.posterImage} alt={filmPromo?.name} width="218" height="327"/>
                  </div>
                  <FilmCardDescription film={filmPromo}/>
                </div>
              </div>
            </>
          )
        }

      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList/>
          <FilmList/>
        </section>
        <Footer/>
      </div>
    </Fragment>
  );
}

export default GeneralScreen;
