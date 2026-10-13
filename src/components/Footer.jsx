import logo from "../assets/Pandora-Logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import pinterest from "../assets/pinterest.png";

function Footer() {
  const link = "block text-[11px] leading-snug text-neutral-600 hover:text-black";
  const title = "mb-3 text-sm font-normal";
  const social ="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 shadow-sm hover:bg-neutral-100";
  const icon = "h-3.5 w-3.5 object-contain";

  return (
    <footer className="bg-white text-left text-neutral-900">
      <div className="mx-auto grid max-w-[1000px] grid-cols-2 gap-x-4 gap-y-8 px-8 pb-10 pt-16 lg:grid-cols-5">
        <div className="text-left">
          <h3 className={title}>EXPLORAR</h3>
          <ul className="space-y-1.5">
            <li><a href="#" className={link}>Joyas</a></li>
            <li><a href="#" className={link}>Charms</a></li>
            <li><a href="#" className={link}>Pulseras</a></li>
            <li><a href="#" className={link}>Regalos</a></li>
            <li><a href="#" className={link}>Colecciones</a></li>
            <li><a href="#" className={link}>Guía de Tallas de Pulseras</a></li>
            <li><a href="#" className={link}>Guía de Tallas de Anillos</a></li>
            <li><a href="#" className={link}>Guía de Tallas de Collares</a></li>
            <li><a href="#" className={link}>Mapa del Sitio</a></li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className={title}>AYUDA</h3>
          <ul className="space-y-1.5">
            <li><a href="#" className={link}>Preguntas Frecuentes</a></li>
            <li><a href="#" className={link}>Seguimiento de mi pedido</a></li>
            <li><a href="#" className={link}>Mis pedidos</a></li>
            <li><a href="#" className={link}>Envíos y Entrega</a></li>
            <li><a href="#" className={link}>Cambios y Devoluciones</a></li>
            <li><a href="#" className={link}>Garantía</a></li>
            <li><a href="#" className={link}>Precios en Tienda Online y Física</a></li>
            <li><a href="#" className={link}>Mi lista de deseos</a></li>
            <li><a href="#" className={link}>Contacta con nosotros</a></li>
            <li><a href="#" className={link}>Blog</a></li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className={title}>SERVICIOS</h3>
          <ul className="space-y-1.5">
            <li><a href="#" className={link}>Descubre My Pandora</a></li>
            <li><a href="#" className={link}>My Pandora: ¡Regístrate!</a></li>
            <li><a href="#" className={link}>Grabado Online</a></li>
            <li><a href="#" className={link}>Click & Collect</a></li>
            <li><a href="#" className={link}>Pago a plazos</a></li>
            <li><a href="#" className={link}>Descuentos para estudiantes</a></li>
            <li><a href="#" className={link}>Limpieza y cuidado</a></li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className={title}>LEGAL</h3>
          <ul className="space-y-1.5">
            <li><a href="#" className={link}>Términos y condiciones de venta</a></li>
            <li><a href="#" className={link}>Términos y condiciones de las promociones</a></li>
            <li><a href="#" className={link}>Términos y condiciones de My Pandora</a></li>
            <li><a href="#" className={link}>Política de cookies</a></li>
            <li><a href="#" className={link}>Política de privacidad</a></li>
            <li><a href="#" className={link}>Información sobre la protección de datos</a></li>
            <li><a href="#" className={link}>Política de uso aceptable</a></li>
            <li><a href="#" className={link}>Política de derechos humanos</a></li>
            <li><a href="#" className={link}>Hojas de reclamaciones</a></li>
            <li><a href="#" className={link}>Información del fabricante e importador</a></li>
            <li><a href="#" className={link}>Derechos de garantía legal</a></li>
            <li><a href="#" className={link}>Accesibilidad</a></li>
          </ul>
        </div>

        <div className="text-left">
          <h3 className={title}>SOBRE PANDORA</h3>
          <ul className="space-y-1.5">
            <li><a href="#" className={link}>Empresa Pandora</a></li>
            <li><a href="#" className={link}>Ofertas Laborales</a></li>
            <li><a href="#" className={link}>Distribuidores oficiales</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1500px] flex-nowrap items-center justify-between gap-6 px-8 pb-8 pt-4">
        <img src={logo} alt="Pandora" className="h-20 w-auto shrink-0" />

        <div className="flex flex-nowrap items-center gap-4 whitespace-nowrap text-[12px]">
          <span className="border-b border-neutral-400 pb-0.5">ESPAÑA</span>
          <span>España</span>
          <span>© TODOS LOS DERECHOS RESERVADOS. 2026 Pandora</span>
        </div>

        <div className="flex shrink-0 gap-1.5">
          <a href="#" aria-label="Facebook" className={social}>
            <img src={facebook} alt="" className={icon} />
          </a>
          <a href="#" aria-label="Instagram" className={social}>
            <img src={instagram} alt="" className={icon} />
          </a>
          <a href="#" aria-label="X" className={social}>
            <img src={x} alt="" className={icon} />
          </a>
          <a href="#" aria-label="YouTube" className={social}>
            <img src={youtube} alt="" className={icon} />
          </a>
          <a href="#" aria-label="TikTok" className={social}>
            <img src={tiktok} alt="" className={icon} />
          </a>
          <a href="#" aria-label="Pinterest" className={social}>
            <img src={pinterest} alt="" className={icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
