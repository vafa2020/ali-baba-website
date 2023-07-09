import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Tour from "./pages/Tour";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="tour" element={<Tour />} />
      </Routes>
    </Layout>
  );
}

export default App;
