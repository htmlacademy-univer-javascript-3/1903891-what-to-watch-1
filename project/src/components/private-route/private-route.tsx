import {AppRoute, AuthorizationStatus} from '../../const';
import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus
}

function PrivateRoute(props: PropsWithChildren<PrivateRouteProps>): any {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
