import {
  CHANGE_ROUTE
} from '../../actiontypes';

const initialRoute = "";

export const changeRoute = (state=initialRoute, action={}) => {
  switch(action.type) {
    case CHANGE_ROUTE:
      return action.payload;
    default:
      return state;
  }
}
