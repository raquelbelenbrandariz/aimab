import Image from "next/image";
import Nav from "./components/Nav";

const WA_LINK = "https://wa.me/59899067539";
const IG_LINK = "https://www.instagram.com/aimara.bolger";

const services = [
  {
    number: "01",
    name: "Limpieza de Cutis",
    description:
      "Elimina impurezas, células muertas y exceso de sebo. Deja la piel fresca, limpia y oxigenada.",
  },
  {
    number: "02",
    name: "Peeling",
    description:
      "Renueva las capas superficiales de la piel, mejora textura, manchas y luminosidad.",
  },
  {
    number: "03",
    name: "Mesoterapia Facial",
    description:
      "Microinyecciones de activos que hidratan, rejuvenecen y mejoran la calidad de la piel.",
  },
  {
    number: "04",
    name: "Mesoestetic",
    description:
      "Fórmulas de alta concentración que revitalizan, reafirman y devuelven vitalidad a la piel.",
  },
  {
    number: "05",
    name: "Mesoterapia Francesa Filorga",
    description:
      "Cócteles con ácido hialurónico y más de 50 activos para una piel más hidratada, luminosa y saludable.",
  },
  {
    number: "06",
    name: "Mesoterapia Capilar",
    description:
      "Fortalece el cuero cabelludo, frena la caída y estimula el crecimiento del cabello.",
  },
  {
    number: "07",
    name: "Plasma Rico en Plaquetas (PRP)",
    description:
      "Regenera, repara y estimula. Mejora la calidad de la piel y el cabello de forma natural. Facial, corporal y capilar.",
  },
  {
    number: "08",
    name: "Radiofrecuencia Facial y Corporal",
    description:
      "Reafirma, mejora la flacidez y estimula la producción de colágeno. Resultados progresivos y naturales.",
  },
  {
    number: "09",
    name: "Radiofrecuencia Fraccionada",
    description:
      "Actúa en las capas profundas de la piel para mejorar arrugas, cicatrices, poros y textura.",
  },
  {
    number: "10",
    name: "Luz Pulsada Intensa (IPL)",
    description:
      "Mejora manchas, rosácea, acné, tono irregular y signos de fotoenvejecimiento.",
  },
];

const valores = [
  "Transparencia",
  "Respeto",
  "Empatía",
  "Discrecionalidad",
  "Responsabilidad",
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── HERO ──────────────────────────────────────────── */}
        <section
          id="inicio"
          className="relative min-h-screen bg-cream overflow-hidden"
        >
          <div className="w-full min-h-screen grid lg:grid-cols-2">
            {/* ── Text column ── */}
            <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 pt-32 pb-20 lg:py-0">
              {/* Botanical decoration (text side only) */}
              <div className="absolute top-0 left-4 w-24 pointer-events-none select-none opacity-20 hidden lg:block">
                <BotanicalSVG />
              </div>

              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-sage mb-8">
                Cosmetología Médica
              </p>

              <h1 className="font-serif font-light text-brown leading-none">
                <span className="block text-6xl sm:text-7xl md:text-8xl tracking-[0.12em]">
                  Aimara
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl tracking-[0.12em] mt-2">
                  Bolger
                </span>
              </h1>

              <div className="flex items-center gap-4 my-8">
                <div className="w-14 h-px bg-sage/50" />
                <LeafIcon className="w-4 h-4 text-sage/70" />
                <div className="w-14 h-px bg-sage/50" />
              </div>

              <p className="font-serif text-xl md:text-2xl italic text-brown-mid max-w-md mb-3">
                Para una piel sana, equilibrada y luminosa
              </p>
              <p className="font-sans text-sm text-brown-light max-w-sm leading-relaxed mb-10">
                Tecnología, ciencia y cuidado personalizado para potenciar tu
                belleza natural
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 bg-sage text-cream-light font-sans text-[11px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-sage-dark transition-colors duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Agendar Sesión
                </a>
                <a
                  href="#tratamientos"
                  className="flex items-center justify-center font-sans text-[11px] tracking-[0.3em] uppercase text-brown border border-cream-dark px-8 py-4 hover:border-sage hover:text-sage transition-colors duration-200"
                >
                  Ver Tratamientos
                </a>
              </div>
            </div>

            {/* ── Image column ── */}
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <Image
                src="/image3.jpeg"
                alt="Aimara Bolger — Cosmetóloga Médica"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Fade into cream on the left edge (desktop) */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
              {/* Fade into cream at the bottom (mobile) */}
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream to-transparent" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-8 lg:left-1/4 flex flex-col items-center gap-2">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-brown-light/50">
              Scroll
            </span>
            <div className="w-px h-10 bg-brown-light/25 animate-pulse" />
          </div>
        </section>

        {/* ─── PHOTO STRIP ───────────────────────────────────── */}
        <div className="grid grid-cols-2 h-64 sm:h-80 md:h-96">
          <div className="relative overflow-hidden group">
            <Image
              src="/dermapen.jpeg"
              alt="Tratamiento Dermapen"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brown/35 group-hover:bg-brown/20 transition-colors duration-500" />
            <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-8">
              <p className="font-sans text-[8px] sm:text-[9px] tracking-[0.4em] uppercase text-cream/60 mb-1">
                Tratamiento
              </p>
              <p className="font-serif text-lg sm:text-2xl text-cream/90 font-light">
                Dermapen
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <Image
              src="/image1.jpeg"
              alt="Mesoterapia"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brown/35 group-hover:bg-brown/20 transition-colors duration-500" />
            <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-8">
              <p className="font-sans text-[8px] sm:text-[9px] tracking-[0.4em] uppercase text-cream/60 mb-1">
                Tratamiento
              </p>
              <p className="font-serif text-lg sm:text-2xl text-cream/90 font-light">
                Mesoterapia
              </p>
            </div>
          </div>
        </div>

        {/* ─── TREATMENTS ────────────────────────────────────── */}
        <section id="tratamientos" className="bg-cream-light py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {/* Section header */}
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-sage mb-4">
                Especialidades
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brown mb-3">
                Tratamientos
              </h2>
              <p className="font-serif text-lg italic text-brown-mid">
                Para una piel sana, equilibrada y luminosa
              </p>
              <Divider className="mt-7" />
            </div>

            {/* Services grid */}
            <div className="grid md:grid-cols-2 gap-px bg-cream-dark">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="bg-cream-light p-8 md:p-10 hover:bg-cream transition-colors duration-300 group"
                >
                  <div className="flex gap-5 items-start">
                    {/* Number */}
                    <span className="font-serif text-4xl font-light text-sage/30 leading-none shrink-0 mt-1 group-hover:text-sage/50 transition-colors duration-300">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-brown mb-2 tracking-wide">
                        {service.name}
                      </h3>
                      <p className="font-sans text-sm text-brown-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-cream-dark">
              <p className="font-serif italic text-brown-mid text-center md:text-left max-w-md text-lg leading-relaxed">
                Cada piel es única. Por eso evaluamos tu caso para diseñar el
                tratamiento ideal para vos.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 text-sage font-sans text-[10px] tracking-[0.3em] uppercase border border-sage px-6 py-3.5 hover:bg-sage hover:text-cream-light transition-colors duration-200"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                Escribime por privado
              </a>
            </div>
          </div>
        </section>

        {/* ─── ABOUT / PHILOSOPHY ────────────────────────────── */}
        <section
          id="nosotros"
          className="relative bg-cream py-24 md:py-32 overflow-hidden"
        >
          {/* Botanical accent */}
          <div className="absolute -right-8 top-1/4 w-36 pointer-events-none select-none opacity-10 rotate-12">
            <BotanicalSVG />
          </div>

          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-sage mb-4">
                Filosofía
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brown">
                Belleza Responsable
              </h2>
              <Divider className="mt-7" />
            </div>

            {/* Mission & Vision with portrait */}
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 mb-16 items-start">
              {/* Portrait */}
              <div className="lg:col-span-2 relative h-80 sm:h-96 lg:h-[520px] overflow-hidden">
                <Image
                  src="/image2.jpeg"
                  alt="Aimara Bolger"
                  fill
                  className="object-cover object-top"
                />
                {/* Subtle sage tint at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream/60 to-transparent" />
              </div>

              {/* Text */}
              <div className="lg:col-span-3 flex flex-col gap-10">
                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <LeafIcon className="w-3.5 h-3.5 text-sage" />
                    <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage">
                      Misión
                    </span>
                  </div>
                  <p className="font-serif text-xl text-brown leading-relaxed mb-4">
                    Crear vínculos de confianza para generar hábitos de
                    autocuidado, así como constancia en tratamientos
                    cosmetológicos.
                  </p>
                  <p className="font-sans text-sm text-brown-light leading-relaxed">
                    Entendiendo y transmitiendo la belleza desde una óptica
                    responsable y consciente, resaltando y potenciando las
                    virtudes de cada piel, con foco en la necesidad sentida por
                    cada persona.
                  </p>
                </div>

                <div className="w-10 h-px bg-cream-dark" />

                <div>
                  <div className="flex items-center gap-2.5 mb-5">
                    <LeafIcon className="w-3.5 h-3.5 text-sage" />
                    <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage">
                      Visión
                    </span>
                  </div>
                  <p className="font-serif text-xl text-brown leading-relaxed mb-4">
                    Referente a nivel nacional en el cuidado de la piel,
                    impactando en la calidad de vida de las personas y en su
                    autoestima.
                  </p>
                  <p className="font-sans text-sm text-brown-light leading-relaxed">
                    La belleza responsable es una forma de respetar y aceptar la
                    armonía de cada piel. No existe una belleza única — es
                    romper con los estándares para aceptar su diversidad.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="pt-10 border-t border-cream-dark text-center">
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage mb-7">
                Valores
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {valores.map((valor) => (
                  <span
                    key={valor}
                    className="font-sans text-[10px] tracking-[0.3em] uppercase text-brown-mid border border-cream-dark px-6 py-2.5 hover:border-sage hover:text-sage transition-colors duration-200"
                  >
                    {valor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ───────────────────────────────────────── */}
        <section id="contacto" className="bg-cream-light py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-sage mb-4">
                Reservas
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-brown mb-3">
                Contacto
              </h2>
              <p className="font-sans text-sm text-brown-light max-w-xs mx-auto leading-relaxed">
                Escribime y juntas diseñamos el tratamiento ideal para tu piel
              </p>
              <Divider className="mt-7" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Contact info */}
              <div className="flex flex-col gap-8">
                {/* Main WhatsApp CTA */}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-sage text-cream-light font-sans text-[11px] tracking-[0.3em] uppercase py-5 hover:bg-sage-dark transition-colors duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Agendar Sesión por WhatsApp
                </a>

                <div className="flex flex-col gap-7">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                      <PhoneIcon className="w-4 h-4 text-sage" />
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-brown-light mb-1">
                        WhatsApp
                      </p>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-xl text-brown hover:text-sage transition-colors duration-200"
                      >
                        +598 99 067 539
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                      <InstagramIcon className="w-4 h-4 text-sage" />
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-brown-light mb-1">
                        Instagram
                      </p>
                      <a
                        href={IG_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-serif text-xl text-brown hover:text-sage transition-colors duration-200"
                      >
                        @aimara.bolger
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center shrink-0 mt-0.5">
                      <LocationIcon className="w-4 h-4 text-sage" />
                    </div>
                    <div>
                      <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-brown-light mb-1">
                        Dirección
                      </p>
                      <p className="font-serif text-xl text-brown leading-snug">
                        Roque Graseras 828/302
                        <br />
                        <span className="text-brown-mid text-lg">
                          esq. Scoseria, Montevideo
                        </span>
                      </p>
                      <a
                        href="https://maps.app.goo.gl/Roque-Graseras-828-Montevideo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-[10px] tracking-[0.2em] uppercase text-sage hover:text-sage-dark transition-colors mt-2 inline-block"
                      >
                        Ver en Google Maps →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full aspect-[4/3] bg-cream-dark overflow-hidden border border-cream-dark">
                <iframe
                  title="Ubicación Aimara Bolger — Roque Graseras 828, Montevideo"
                  src="https://maps.google.com/maps?q=Roque+Graseras+828+Montevideo+Uruguay&output=embed&hl=es"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-brown">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <p className="font-serif tracking-[0.25em] uppercase text-cream/80 text-base">
                Aimara Bolger
              </p>
              <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-sage/50 mt-1">
                Cosmetología Médica · Montevideo
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-sage-light transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/40 hover:text-sage-light transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="font-sans text-[10px] tracking-wider text-cream/25">
              © {new Date().getFullYear()} Aimara Bolger
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ─── Shared components ─────────────────────────────────────────── */

function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="w-10 h-px bg-sage/50" />
      <LeafIcon className="w-3 h-3 text-sage/60" />
      <div className="w-10 h-px bg-sage/50" />
    </div>
  );
}

function LeafIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 4-8 4s-1-2-5-2z" />
    </svg>
  );
}

function BotanicalSVG() {
  return (
    <svg
      viewBox="0 0 100 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <path
        d="M50 8 Q44 38 47 68 Q50 98 46 128 Q42 158 47 200"
        stroke="#7d9070"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse
        cx="33"
        cy="28"
        rx="14"
        ry="6"
        transform="rotate(-38 33 28)"
        fill="#7d9070"
        opacity="0.65"
      />
      <ellipse
        cx="66"
        cy="48"
        rx="14"
        ry="6"
        transform="rotate(32 66 48)"
        fill="#7d9070"
        opacity="0.65"
      />
      <ellipse
        cx="32"
        cy="74"
        rx="13"
        ry="5.5"
        transform="rotate(-30 32 74)"
        fill="#7d9070"
        opacity="0.55"
      />
      <ellipse
        cx="66"
        cy="98"
        rx="13"
        ry="5.5"
        transform="rotate(28 66 98)"
        fill="#7d9070"
        opacity="0.55"
      />
      <ellipse
        cx="33"
        cy="122"
        rx="12"
        ry="5"
        transform="rotate(-28 33 122)"
        fill="#7d9070"
        opacity="0.45"
      />
      <ellipse
        cx="65"
        cy="146"
        rx="12"
        ry="5"
        transform="rotate(26 65 146)"
        fill="#7d9070"
        opacity="0.40"
      />
      <ellipse
        cx="34"
        cy="170"
        rx="11"
        ry="4.5"
        transform="rotate(-24 34 170)"
        fill="#7d9070"
        opacity="0.30"
      />
      <ellipse
        cx="64"
        cy="192"
        rx="10"
        ry="4"
        transform="rotate(22 64 192)"
        fill="#7d9070"
        opacity="0.22"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.23 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
    </svg>
  );
}

function LocationIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
