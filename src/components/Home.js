import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to Homepage</h1>
      <Link to="/products">Products</Link>
    </>
  );
};

export default Home;
