import transporte from "../assets/transporte.png";
import devolucion from "../assets/devolucion.png";
import garantia from "../assets/garantia.png";
import favorito from "../assets/favorito.png";

 function FeaturesBar() {
  const item = "relative flex flex-col items-start gap-4 px-8 py-4 text-left";
  const item2 = "relative flex flex-col items-start gap-2 px-8 py-4 text-left";
  const divider ="absolute left-0 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-neutral-300 md:block";
  const icon = "h-12 w-12 object-contain object-left";
  const icon2 = "h-14 w-14 object-contain object-left";
  const text = "text-left text-[12px] font-bold text-neutral-900";

  return (
    <section className="bg-white py-10 text-left text-black">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-6 md:grid-cols-4">
        <div className={item2}>
          <img src={transporte} alt="" className={icon2} />
          <p className={text}>Envío gratis desde 49€</p>
        </div>

        <div className={item}>
          <span className={divider} />
          <img src={devolucion} alt="" className={icon} />
          <p className={text}>Devolución gratuita en 30 días</p>
        </div>

        <div className={item}>
          <span className={divider} />
          <img src={garantia} alt="" className={icon} />
          <p className={text}>Garantía 3 años</p>
        </div>

        <div className={item}>
          <span className={divider} />
          <img src={favorito} alt="" className={icon} />
          <p className={text}>My Pandora</p>
        </div>
      </div>
    </section>
  );
}
export default FeaturesBar;