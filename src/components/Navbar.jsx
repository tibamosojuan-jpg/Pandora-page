import logo from "../assets/Pandora-logo.png";
import lupaBlanca from "../assets/lupa-blanca.png";
import lupaNegro from "../assets/lupa-negro.png";
import coraBlanco from "../assets/cora-blanco.png";
import coraNegro from "../assets/cora-negro.png";
import ubiBlanco from "../assets/ubi-blanco.png";
import ubiNegro from "../assets/ubi-negro.png";
import usuarioBlanco from "../assets/usuario-blanco.png";
import usuarioNegro from "../assets/usuario-negro.png";
import bolsaBlanco from "../assets/bolsa-de-la-compra-blanco.png";
import bolsaNegro from "../assets/bolsa-de-la-compra-negro.png";

function Icon({ blanco, negro, className = "h-4 w-4" }) {
  return (
    <>
      <img
        src={blanco}
        alt=""
        className={`${className} block group-hover:hidden group-focus-within:hidden`}
      />
      <img
        src={negro}
        alt=""
        className={`${className} hidden group-hover:block group-focus-within:block`}
      />
    </>
  );
}

 function Navbar() {
  const menu =
    "whitespace-nowrap text-[12px] tracking-wide underline-offset-8 hover:underline";

  return (
    <header className="group absolute inset-x-0 top-0 z-50 bg-transparent text-white transition-colors duration-300 hover:bg-white hover:text-black focus-within:bg-white focus-within:text-black">
      <div className="grid grid-cols-3 items-center px-10 pt-5">
        <a href="/">
          <img
            src={logo}
            alt="Pandora"
            className="h-14 w-auto brightness-0 invert group-hover:filter-none group-focus-within:filter-none"
          />
        </a>

        <div className="flex items-center justify-center gap-2">
          <Icon blanco={lupaBlanca} negro={lupaNegro} />
          <input
            type="text"
            placeholder="Buscar"
            className="w-28 bg-transparent text-xs outline-none placeholder:text-current placeholder:opacity-70"
          />
        </div>

        <div className="flex items-center justify-end gap-4">
          <button aria-label="Lista de deseos">
            <Icon blanco={coraBlanco} negro={coraNegro} />
          </button>
          <button aria-label="Tiendas">
            <Icon blanco={ubiBlanco} negro={ubiNegro} />
          </button>
          <button aria-label="Mi cuenta">
            <Icon blanco={usuarioBlanco} negro={usuarioNegro} />
          </button>
          <button aria-label="Carrito">
            <Icon blanco={bolsaBlanco} negro={bolsaNegro} />
          </button>
        </div>
      </div>

      <nav className="flex items-center justify-between gap-6 px-10 pb-4 pt-5">
        <a href="#" className={menu}>Novedades & Destacados</a>
        <a href="#" className={menu}>Charms</a>
        <a href="#" className={menu}>Pulseras</a>
        <a href="#" className={menu}>Anillos</a>
        <a href="#" className={menu}>Pendientes</a>
        <a href="#" className={menu}>Collares</a>
        <a href="#" className={menu}>Joyas Personalizadas</a>
        <a href="#" className={menu}>Ideas de Regalo</a>
        <a href="#" className={menu}>Colecciones</a>
        <a href="#" className={menu}>Joyas</a>
      </nav>
    </header>
  );
}

export default Navbar;