import { useEffect } from "react";
import { getProducts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, loading, error } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      {products.map((each, index) => {
        return (
          <div key={index}>
            <h1>
              {each.title} - {each.price}
            </h1>
            <Link to={`/products/${each.id}`}>View Detail</Link>
            <Link to="/">Back to Home</Link>
          </div>
        );
      })}
    </>
  );
};

export default Products;
