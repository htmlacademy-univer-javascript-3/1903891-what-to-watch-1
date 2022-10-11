import GeneralScreen from '../../pages/general-screen/general-screen';
import {Route, Routes} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import '../../css/main.min.css';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import ReviewScreen from '../../pages/review-screen/review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import {InitType} from '../../types/init';
import FilmList from '../film-list/film-list';
import FilmDetailsScreen from '../../pages/film-details-screen/film-details-screen';

function App(props: InitType): JSX.Element {
  const {films} = props;
  return (
    <Routes>
      <Route path="/">
        <Route index element={<GeneralScreen films={films}/>}/>
        <Route path={AppRoute.Login} element={<SignInScreen/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FilmList films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.FilmsList}>
          <Route path={':id'} element={<FilmDetailsScreen films={films}/>}/>
          <Route path={`:id${AppRoute.AddReview}`} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <ReviewScreen films={films}/>
            </PrivateRoute>
          }
          />
        </Route>
        <Route path={AppRoute.Player}>
          <Route path={':id'} element={<PlayerScreen films={films}/>}/>
        </Route>
        <Route path={AppRoute.NotFoundPage} element={<NotFoundPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
