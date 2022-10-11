import {ComponentType} from 'react';
import {Film} from '../types/film';
import FilmCard from '../components/film-card/film-card';

type HOCProps = {
  renderFilmCard: (film: Film) => JSX.Element
}

function withFilmCard<T>(Component: ComponentType<T>): ComponentType<Omit<T, keyof HOCProps>> {
  type ComponentProps = Omit<T, keyof HOCProps>

  function WithFilmCard(props: ComponentProps): JSX.Element {
    return (
      <Component
        {...props as T}
        renderFilmCard={(film: Film) => (
          <FilmCard
            key={film.id}
            film={film}
            // isActive={activeCard === film.id}
            // onMouseOverHandler={(e: any) => {
            //   e.preventDefault();
            //   setActiveCard(film.id);
            // }}
            // onMouseLeaveHandler={(e: any) => {
            //   e.preventDefault();
            //   setActiveCard(-1);
            // }}
          />
        )}
      />
    );
  }

  return WithFilmCard;
}

export default withFilmCard;
