import GeneralScreen from '../../pages/general-screen/general-screen';
import {Route, Routes} from 'react-router-dom';

import {AppRoute, AuthorizationStatus} from '../../const';
import '../../css/main.min.css';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import PrivateRoute from '../private-route/private-route';
import ReviewScreen from '../../pages/review-screen/review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import FilmScreen from '../../pages/film-screen/film-screen';
import FilmScreenOverview from '../film-screen-overview/film-screen-overview';
import FilmScreenDetails from '../film-screen-details/film-screen-details';
import FilmScreenReviews from '../film-screen-reviews/film-screen-reviews';
import {Film} from '../../types/film';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';

export type InitType ={
  films: Film[],
  //comments: Comment[]
}

function App(props: InitType): JSX.Element {
  const {films/*, comments*/} = props;
  return (
    <Routes>
      <Route path="/">
        <Route index element={<GeneralScreen films={films}/>}/>
        <Route path={AppRoute.Login} element={<SignInScreen/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyListScreen films={films}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.FilmsList}>
          <Route path={':id'} element={<FilmScreen films={films}/>}>
            <Route index element={<FilmScreenOverview films={films}/>}/>
            <Route path={`${AppRoute.FilmDetails}`} element={<FilmScreenDetails films={films}/>}/>
            <Route path={`${AppRoute.FilmReviews}`} element={<FilmScreenReviews /*comments={comments}*//>}/>
          </Route>
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
