import GeneralScreen from '../../pages/general-screen/general-screen';
import {FilmCardType} from '../../types/film-card';
import '../../css/main.min.css';

function App(props: FilmCardType): JSX.Element {
  const {countCard} = props;
  return (<GeneralScreen countCard={countCard}/>);
}

export default App;
