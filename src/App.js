import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import ProductList from "./components/ProductList/index";
import ProductDetails from "./components/ProductDetails/index"
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [sidebarOpen, setSisdebarOpen] = useState(false);
  return (
    <Routes>
      <Route path={'/'} element={<ProductList/>} />
      <Route path={'/ProductDetails/:id'} element={<ProductDetails/>} />
    </Routes>
  );
}

export default App;
