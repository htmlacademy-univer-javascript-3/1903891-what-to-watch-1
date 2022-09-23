import GeneralScreen from '../../pages/general-screen/general-screen';
import {FilmCardType} from '../../types/film-card';

function App(props: FilmCardType): JSX.Element {
  const {countCard} = props;
  return (<GeneralScreen countCard={countCard}/>);
}

export default App;
