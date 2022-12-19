import {Fragment} from 'react';

import {Film} from '../../types/film';
import FilmCardDescription from '../film-card-description/film-card-description';
import FilmCardHeaderDescription from '../film-card-header-description/film-card-header-description';

type filmCardPreviewProp = {
  film: Film
};

function FilmCardPreview(props: filmCardPreviewProp) {
  const {film} = props;

  return (
    <Fragment>
      <FilmCardHeaderDescription film={film}/>
      <div className="film-card__wrap">
        <FilmCardDescription film={film}/>
      </div>
    </Fragment>
  );
}

export default FilmCardPreview;
