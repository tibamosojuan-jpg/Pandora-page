import { useRef, useState } from "react";

export default function HeroVideo() {
    const videoRef = useRef(null);
    const [pausado, setPausado] = useState(false);
    const [silenciado, setSilenciado] = useState(true);

    const alternarPausa = () => {
    const v = videoRef.current;
    if (v.paused) {
        v.play();
        setPausado(false);
    } else {
        v.pause();
        setPausado(true);
    }
    };

    const alternarSonido = () => {
    const v = videoRef.current;
    v.muted = !v.muted;
    setSilenciado(v.muted);
    };

    return (
    <section className="relative h-[80vh] w-full overflow-hidden">
        <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/principal.mp4"
        autoPlay
        muted
        loop
        playsInline
        />

        {}
        <div className="absolute inset-0 bg-black/20" />

        {}
        <div className="absolute bottom-0 left-[4%] text-white">
    <span className="bg-pink-200 px-2 py-1 text-xs text-black">
    Edición limitada
    </span>
    <p className="mt-3 text-sm uppercase tracking-wide">
    PANDORA X PAT MCGRATH
    </p>
    <h2 className="mt-2 text-4xl font-normal leading-snug md:text-5xl">
    EL ARTE DEL COLOR
    </h2>
    <button className="group relative mt-10 overflow-hidden bg-[#231815] px-10 py-5 text-sm uppercase tracking-wide text-white">
    <span className="absolute inset-0 translate-y-full bg-pink-200 transition-transform duration-300 ease-out group-hover:translate-y-0" />
    <span className="relative z-10 transition-colors duration-300 group-hover:text-[#231815]">
    COMPRAR PANDORA X PAT
    <br />
    MCGRATH
    </span>
</button>
</div>

      {}
        <div className="absolute bottom-0 right-[4%] flex bg-[#231815] text-white">
        <button
        onClick={alternarPausa}
        className="px-6 py-5 transition-colors duration-300 hover:bg-pink-200 hover:text-[#231815]"
        aria-label={pausado ? "Reproducir" : "Pausar"}
        >
            {pausado ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4l13 8-13 8z" />
            </svg>
            ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="3" height="16" />
                <rect x="15" y="4" width="3" height="16" />
            </svg>
            )}
        </button>

        <button
        onClick={alternarSonido}
        className="px-6 py-5 transition-colors duration-300 hover:bg-pink-200 hover:text-[#231815]"
        aria-label={silenciado ? "Activar sonido" : "Silenciar"}
        >
            <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            >
            <path d="M4 9v6h4l5 4V5L8 9H4z" />
            {silenciado ? (
                <path d="M17 9l5 6M22 9l-5 6" />
            ) : (
                <path d="M16 8a5 5 0 010 8M19 5a9 9 0 010 14" />
            )}
            </svg>
        </button>
        </div>
    </section>
    );
}