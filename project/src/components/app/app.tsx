import GeneralScreen from '../../pages/general-screen/general-screen';
import {Route, Routes} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import ReviewScreen from '../../pages/review-screen/review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmScreen from '../../pages/film-screen/film-screen';
import FilmScreenOverview from '../film-screen-overview/film-screen-overview';
import FilmScreenDetails from '../film-screen-details/film-screen-details';
import FilmScreenReviews from '../film-screen-reviews/film-screen-reviews';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';


function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<GeneralScreen/>}/>
        <Route path={AppRoute.Login} element={<SignInScreen/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyListScreen/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.FilmsList}>
          <Route path={':id'} element={<FilmScreen/>} />
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
        <Route path={AppRoute.NotFoundPage} element={<NotFoundPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
