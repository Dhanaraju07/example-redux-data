import {
  REQUEST_DATA,
  REQUEST_DATA_ERROR,
  REQUEST_DATA_SUCCESS,
  REQUEST_PRODUCT_DATA,
  REQUEST_PRODUCT_DATA_ERROR,
  REQUEST_PRODUCT_DATA_SUCCESS,
} from "./actions";

export const productsReducer = (
  state = { loading: false, products: [], error: null },
  action
) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: null,
      };
    case REQUEST_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productReducer = (
  state = { loading: false, product: {}, error: null },
  action
) => {
  switch (action.type) {
    case REQUEST_PRODUCT_DATA:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case REQUEST_PRODUCT_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

