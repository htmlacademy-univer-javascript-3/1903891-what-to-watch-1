import React from 'react';
import SvgGeneralScreen from '../../svg/svg-general-screen.svg';
import {useAppDispatch} from '../../hooks/hooks-toolkit';
import {setNewStateIsFullScreen} from '../../store/player-store/player-store.reducer';

function PlayerBtnFullScreen() {
  const dispatch = useAppDispatch();

  const handleClickFullScreen = () => {
    dispatch(setNewStateIsFullScreen());
  };

  return (
    <button type="button" className="player__full-screen" onClick={handleClickFullScreen}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref={`${SvgGeneralScreen}#full-screen`}/>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

export default PlayerBtnFullScreen;
