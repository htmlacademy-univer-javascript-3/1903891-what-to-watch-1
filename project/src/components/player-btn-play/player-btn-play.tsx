import React from 'react';
import SvgGeneralScreen from '../../svg/svg-general-screen.svg';
import {setNewStateIsPlaying} from '../../store/player-store/player-store.reducer';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks-toolkit';

function PlayerBtnPlay() {
  const isPlaying = useAppSelector((state) => state.player.isPlaying);
  const currentTimeToggle = useAppSelector((state) => state.player.currentToggler);
  const dispatch = useAppDispatch();

  const handlePlay = () => {
    dispatch(setNewStateIsPlaying(!isPlaying));
  };

  return (
    <button
      type="button"
      className="player__play"
      onClick={handlePlay}
    >
      {(isPlaying && currentTimeToggle !== 100)
        ? (
          <svg viewBox="0 0 14 21" width="19" height="19">
            <use xlinkHref={`${SvgGeneralScreen}#pause`}/>
          </svg>
        ) : (
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref={`${SvgGeneralScreen}#play-s`}/>
          </svg>
        )}
      <span>Play</span>
    </button>
  );
}

export default PlayerBtnPlay;
