import SvgGeneralScreen from '../../svg/svg-general-screen.svg';
import '../../css/main.min.css';
import {InitType} from '../../types/init';
import {useParams} from 'react-router-dom';
import {Film} from '../../types/film';

function PlayerScreen(props: InitType) {
  const {films} = props;
  const {id} = useParams();
  const film = films.find((el: Film) => el.id.toString() === id);
  return (
    <div className="player">
      <video src={film!.filmCardInfo.videoLink} className="player__video" poster={film!.filmCardInfo.posterImage}/>
      <button type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={`${SvgGeneralScreen}#play-s`}/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref={`${SvgGeneralScreen}#full-screen`}/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
