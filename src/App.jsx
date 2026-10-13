import Navbar from "./components/Navbar";
import HeroVideo from "./components/HeroVideo";
import PromoPulsera from "./components/PromoPulsera";
import TresVideos from "./components/TresVideos";
import MenuCategorias from "./components/MenuCategorias";
import FeaturesBar from "./components/FeaturesBar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="relative">
      <Navbar />

      <main className="bg-white font-sans">
        <HeroVideo />

        <div className="px-[var(--margen-x)]  text-left">
          <PromoPulsera />
        </div>

        <TresVideos />

        <div className="  text-left">
          <MenuCategorias />
        </div>

        

        
      </main>

      <div className="px-[var(--margen-x)]">
        <FeaturesBar />
      </div>
      <Footer />
    </div>
  );
}