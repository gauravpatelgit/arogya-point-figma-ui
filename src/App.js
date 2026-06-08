import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import ProductList from "./components/ProductList/index";
import ProductDetails from "./components/ProductDetails/index";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [sidebarOpen, setSisdebarOpen] = useState(false);
  return (
    <div className="relative min-h-[1520px]">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      <Routes>
        <Route path={"/"} element={<ProductList />} />
        <Route path={"/ProductDetails/:id"} element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
