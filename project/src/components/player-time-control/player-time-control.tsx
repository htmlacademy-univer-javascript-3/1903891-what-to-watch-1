import {useAppSelector} from '../../hooks/hooks-toolkit';

function PlayerTimeControl() {
  const togglerValue = useAppSelector((state) => state.player.currentToggler);
  const time = useAppSelector((state) => state.player.timeLeft);

  return (
    <>
      <div className="player__time">
        <progress className="player__progress" value={togglerValue} max="100"/>
        <div className="player__toggler" style={{left: `${togglerValue}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">- {time}</div>
    </>
  );
}

export default PlayerTimeControl;
