import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { product, loading } = useSelector((state) => state.Product);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div key={product.id}>
      <h1>
        {product.title} - {product.price}
      </h1>
      <Link to="/products">Products</Link>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ProductDetail;
