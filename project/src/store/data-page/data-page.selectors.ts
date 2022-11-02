import {AuthorizationStatus, NameSpace} from '../../const';
import {RootState} from '../store';

export const getAuthorizationStatus = (state: RootState): AuthorizationStatus => state[NameSpace.PageInfo].authorizationStatus;
