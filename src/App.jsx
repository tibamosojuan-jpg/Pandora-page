import { useState } from 'react'
import Navbar from "./components/Navbar";
import FeaturesBar from "./components/FeaturesBar";
import Footer from "./components/Footer";
import PromoPulsera from "./components/PromoPulsera";
import MenuCategorias from "./components/MenuCategorias";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative">
      <Navbar />

          <main className="bg-white font-sans">
            <PromoPulsera />
            <MenuCategorias />
          </main>

      <FeaturesBar />
      <Footer />
    </div>
  );


}

export default App
