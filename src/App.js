import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import ProductList from "./components/ProductList/index";
import ProductDetails from "./components/ProductDetails/index";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={() => setSidebarOpen(true)} />
      <div className="lg:flex flex-1">
        <Sidebar open={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate replace to="/AllProductList" />} />
            <Route path="/AllProductList" element={<ProductList />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
