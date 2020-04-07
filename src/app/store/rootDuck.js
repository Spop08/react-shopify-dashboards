import { combineReducers } from "redux";
import * as auth from "./ducks/auth.duck";
import * as user from "./ducks/user.duck";
import { metronic } from "../../_metronic";

//Combine Reducers to rootReducer
export const rootReducer = combineReducers({
  auth: auth.reducer,
  user: user.reducer,
  i18n: metronic.i18n.reducer,
  builder: metronic.builder.reducer,
});
