import axios from "axios";

export const REQUEST_DATA = "REQUEST_DATA";
export const REQUEST_DATA_SUCCESS = "REQUEST_DATA_SUCCESS";
export const REQUEST_DATA_ERROR = "REQUEST_DATA_ERROR";

export const REQUEST_PRODUCT_DATA = "REQUEST_PRODUCT_DATA";
export const REQUEST_PRODUCT_DATA_SUCCESS = "REQUEST_PRODUCT_DATA_SUCCESS";
export const REQUEST_PRODUCT_DATA_ERROR = "REQUEST_PRODUCT_DATA_ERROR";

export const getProducts = () => {
  return function (dispatch) {
    dispatch({ type: REQUEST_DATA });
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        console.log(res.data.products);
        dispatch({ type: REQUEST_DATA_SUCCESS, payload: res.data.products });
      })
      .catch((err) => {
        console.log("Error Occured", err.message);
        dispatch({ type: REQUEST_DATA_ERROR, payload: err.message });
      });
  };
};

export const getProduct = (id) => {
  return function (dispatch) {
    dispatch({ type: REQUEST_PRODUCT_DATA });
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: REQUEST_PRODUCT_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: REQUEST_PRODUCT_DATA_ERROR, payload: err });
      });
  };
};
