
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
 <div>

<Header
  toggleSidebar={() => setSidebarOpen(true)}
/>

<Sidebar
  open={sidebarOpen}
  closeSidebar={() => setSidebarOpen(false)}
/>
  <Footer />
 </div>

  
  );
}

export default App;
