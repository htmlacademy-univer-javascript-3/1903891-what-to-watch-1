import React from 'react';
import {useAppSelector} from '../../hooks/hooks-toolkit';
import PlayerTimeControl from '../player-time-control/player-time-control';
import PlayerBtnPlay from '../player-btn-play/player-btn-play';
import PlayerBtnFullScreen from '../player-btn-full-screen/player-btn-full-screen';

function ControlsVideo() {
  const film = useAppSelector((state) => state.filmCard.filmByID);

  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <PlayerTimeControl/>
      </div>
      <div className="player__controls-row">
        <PlayerBtnPlay/>
        <div className="player__name">{film?.name}</div>
        <PlayerBtnFullScreen/>
      </div>
    </div>
  );
}

export default ControlsVideo;
