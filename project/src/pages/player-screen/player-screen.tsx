import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import VideoPlayer from '../../components/video-player/video-player';
import ControlsVideo from '../../components/controls-video/controls-video';
import {getFavoriteFilms, getFilmByID} from '../../store/api-actions';
import NotFoundPage from '../../components/not-found-page/not-found-page';
import {setNewStateIsPlaying} from '../../store/player-store/player-store.reducer';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from '../../const';

function PlayerScreen() {
  const params = useParams();
  const prodId = params.id;
  const film = useAppSelector((state) => state.filmCard.filmByID);
  const isLoading = useAppSelector((state) => state.dataPage.isDataLoading);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goBack = () => {
    if (film) {
      navigate(`${AppRoute.FilmsList}/${film.id}`);
    }
  };

  useEffect(() => {
    const mounted = true;
    if (mounted) {
      dispatch(getFilmByID(prodId));
      dispatch(getFavoriteFilms());
    }
    dispatch(setNewStateIsPlaying(false));
  }, [prodId]);


  if (!film && isLoading) {
    return <NotFoundPage/>;
  }

  if (!isLoading) {
    return <LoadingScreen/>;
  }

  return (
    <div className="player">
      <VideoPlayer
        videoLink={film!.videoLink}
        posterImage={film!.backgroundImage}
        isSound
      />
      <button type="button" className="player__exit" onClick={goBack}>Exit</button>
      <ControlsVideo/>
    </div>
  );
}

export default PlayerScreen;
