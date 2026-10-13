import HeroVideo from "./components/HeroVideo";
import PromoPulsera from "./components/PromoPulsera";
import TresVideos from "./components/TresVideos";
import MenuCategorias from "./components/MenuCategorias";


export default function App() {
  return (
    <main className="bg-white font-sans">
      <HeroVideo />
      <PromoPulsera />
      <TresVideos />
      <MenuCategorias />      
    </main>
  );
}