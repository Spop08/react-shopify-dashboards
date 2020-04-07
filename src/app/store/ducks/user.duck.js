const actionTypes = {
  LOAD_USER: "Load User",
  CONNECT_STORE: "Connect Store",

  LOAD_IMPORT: "Load Import Products",
  LOAD_STORE: "Load Store Products",
};

const initialState = {
  info: undefined,
  import_products: [],
  store_products: [],
};
//Create reducer for user details
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_USER: {
      const { info } = action.payload;
      return { ...state, info };
    }
    case actionTypes.CONNECT_STORE: {
      const { store } = action.payload;
      const { ...info } = state.info;
      info.store = store;
      return { ...state, info };
    }
    case actionTypes.LOAD_IMPORT: {
      const { products } = action.payload;
      return { ...state, import_products: products };
    }
    case actionTypes.LOAD_STORE: {
      const { products } = action.payload;
      return { ...state, store_products: products };
    }
    default:
      return state;
  }
};
//Actions for user details
export const actions = {
  f_loadUserInfo: (info) => ({
    type: actionTypes.LOAD_USER,
    payload: { info },
  }),
  f_storeConnect: (store) => ({
    type: actionTypes.CONNECT_STORE,
    payload: { store },
  }),
  f_loadImportProducts: (products) => ({
    type: actionTypes.LOAD_IMPORT,
    payload: { products },
  }),
  f_loadStoreProducts: (products) => ({
    type: actionTypes.LOAD_STORE,
    payload: { products },
  }),
};
