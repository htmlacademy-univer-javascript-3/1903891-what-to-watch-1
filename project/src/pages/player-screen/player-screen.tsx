import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';
import VideoPlayer from '../../components/video-player/video-player';
import ControlsVideo from '../../components/controls-video/controls-video';
import {setFalseInIsPlayingVideo} from '../../store/player-store/player-store.reducer';

function PlayerScreen() {
  const film = useAppSelector((state) => state.filmCard.filmByID);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goBack = () => navigate(-1);

  useEffect(() => () => {
    dispatch(setFalseInIsPlayingVideo());
  });

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
