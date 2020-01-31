import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserLoaded: "[Load User] Auth API",
  StoreConnected: "[Connect Store] Action"
};

const initialAuthState = {
  user: undefined,
  authToken: undefined
};

export const reducer = persistReducer(
  { storage, key: "demo1-auth", whitelist: ["user", "authToken"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken } = action.payload;
        console.log("AUTHTOKEN", authToken);
        return { ...state, authToken };
      }

      case actionTypes.Register: {
        const { authToken } = action.payload;
        return { authToken, user: undefined };
      }

      case actionTypes.Logout: {
        // routerHelpers.forgotLastLocation();
        return initialAuthState;
      }

      case actionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }

      case actionTypes.StoreConnected: {
        const { store } = action.payload;
        const { ...user } = state.user;
        user.store = store;
        return { ...state, user };
      }
      default:
        return state;
    }
  }
);

export const actions = {
  login: authToken => ({ type: actionTypes.Login, payload: { authToken } }),
  register: authToken => ({
    type: actionTypes.Register,
    payload: { authToken }
  }),
  logout: () => ({ type: actionTypes.Logout }),
  fulfillUser: user => ({ type: actionTypes.UserLoaded, payload: { user } }),
  connectStore: store => ({
    type: actionTypes.StoreConnected,
    payload: { store }
  })
};
