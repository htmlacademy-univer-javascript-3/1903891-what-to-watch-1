import GeneralScreen from '../../pages/general-screen/general-screen';
import {Route, Routes} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import {FilmCardType} from '../../types/film-card';
import '../../css/main.min.css';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import PrivateRoute from '../private-route/private-route';
import FilmDetailsScreen from '../../pages/film-details-screen/film-details-screen';
import ReviewScreen from '../../pages/review-screen/review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundPage from '../not-found-page/not-found-page';

function App(props: FilmCardType): JSX.Element {
  const {countCard} = props;
  return (
    <Routes>
      <Route path="/">
        <Route index element={<GeneralScreen countCard={countCard}/>}/>
        <Route path={AppRoute.Login} element={<SignInScreen/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyListScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.FilmsList}>
          <Route path={':id'} element={<FilmDetailsScreen/>}/>

          <Route path={`:id${AppRoute.AddReview}`} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <ReviewScreen/>
            </PrivateRoute>
          }
          />
        </Route>
        <Route path={AppRoute.Player}>
          <Route path={':id'} element={<PlayerScreen/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
