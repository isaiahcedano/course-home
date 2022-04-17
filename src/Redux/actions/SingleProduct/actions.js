import {
  CHANGE_ROUTE
} from '../../actiontypes.js';

export const changeRoute = (route) => ({
  type: CHANGE_ROUTE,
  payload: route,
});
