import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

//Auth reducer
export const actionTypes = {
  Login: "LOG_IN",
  Logout: "LOG_OUT",
};

const initialAuthState = {
  authToken: undefined,
};
//Create reducer using persist reducer
export const reducer = persistReducer(
  { storage, key: "demo1-auth", whitelist: ["authToken"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken } = action.payload;
        return { authToken };
      }

      case actionTypes.Logout: {
        return initialAuthState;
      }
      default:
        return state;
    }
  }
);
//Login/Logout Actions
export const actions = {
  login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  logout: () => ({ type: actionTypes.Logout }),
};
