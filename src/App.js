import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Products";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ProductDetail from "./components/ProductDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

