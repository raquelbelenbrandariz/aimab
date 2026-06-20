import Image from "next/image";
import Nav from "./components/Nav";
import Carousel from "./components/Carousel";

const WA_LINK = "https://wa.me/59899067539";
const IG_LINK = "https://www.instagram.com/aimara.bolger";

const carouselSlides = [
  {
    src: "/dermapen.jpeg",
    alt: "Tratamiento Dermapen",
    label: "Tratamiento",
    caption: "Dermapen",
    position: "center 80%",
  },
  {
    src: "/image1.jpeg",
    alt: "Mesoterapia facial",
    label: "Tratamiento",
    caption: "Mesoterapia",
  },
  {
    src: "/image3-carousel.jpeg",
    alt: "Atención personalizada en consulta",
    label: "Experiencia",
    caption: "Atención Personalizada",
  },
];

const services = [
  {
    icon: DropletIcon,
    name: "Limpieza Profunda con Peeling",
    description:
      "Higiene, extracción y renovación en una sola sesión. Piel limpia, descongestionada y luminosa.",
    duration: "60 MIN",
    price: "$2.500",
  },
  {
    icon: SparkleIcon,
    name: "Peeling de Ácido / Retinoico",
    description:
      "Renueva la superficie de la piel: mejora textura, manchas y luminosidad.",
    duration: "30 MIN",
    price: "$2.700",
  },
  {
    icon: SyringeIcon,
    name: "Mesoterapia Facial",
    description:
      "Microinyecciones de activos que hidratan, rejuvenecen y mejoran la calidad de la piel.",
    duration: "45 MIN",
    price: "$3.500",
  },
  {
    icon: SyringeIcon,
    name: "Mesoterapia Francesa",
    description:
      "Cóctel con ácido hialurónico y múltiples activos para una piel más hidratada y luminosa.",
    duration: "45 MIN",
    price: "$5.000",
  },
  {
    icon: LeafIcon,
    name: "Mesoterapia Mesoestetic",
    description:
      "Fórmulas de alta concentración que revitalizan, reafirman y devuelven vitalidad a la piel.",
    duration: "45 MIN",
    price: "$5.000",
  },
  {
    icon: BodyIcon,
    name: "Mesoterapia Corporal",
    description:
      "Activos específicos para mejorar firmeza, textura y aspecto de la piel del cuerpo.",
    duration: "50 MIN",
    price: "$2.500",
    note: "Sesión individual · consultar planes",
  },
  {
    icon: HairIcon,
    name: "Mesoterapia Capilar",
    description:
      "Fortalece el cuero cabelludo, frena la caída y estimula el crecimiento del cabello.",
    duration: "30 MIN",
    price: "$1.700",
    note: "Sesión individual · consultar planes",
  },
  {
    icon: VialIcon,
    name: "Plasma Rico en Plaquetas (PRP)",
    description:
      "Regenera y repara de forma natural. Mejora la calidad de la piel y el cabello.",
    duration: "60 MIN",
    price: "$5.000",
  },
  {
    icon: ZapIcon,
    name: "Radiofrecuencia Facial",
    description:
      "Reafirma, mejora la flacidez y estimula la producción de colágeno.",
    duration: "40 MIN",
    price: "$3.500",
  },
  {
    icon: ZapIcon,
    name: "Radiofrecuencia Fraccionada",
    description:
      "Actúa en las capas profundas de la piel para mejorar arrugas, cicatrices, poros y textura.",
    duration: "45 MIN",
    price: "$4.000",
  },
  {
    icon: DotsIcon,
    name: "Dermapen",
    description:
      "Microagujas que estimulan el colágeno: mejora textura, poros y cicatrices.",
    duration: "45 MIN",
    price: "$3.500",
  },
];

const valores = [
  {
    icon: EyeIcon,
    name: "Transparencia",
    description:
      "Comunicación clara y honesta en cada diagnóstico y tratamiento.",
  },
  {
    icon: UsersIcon,
    name: "Respeto",
    description: "Tu ritmo, tu piel y tus tiempos siempre en primer lugar.",
  },
  {
    icon: HeartIcon,
    name: "Empatía",
    description: "Escuchamos antes de proponer: cada caso es único.",
  },
  {
    icon: LockIcon,
    name: "Discrecionalidad",
    description: "Tu privacidad e información se resguardan con cuidado.",
  },
  {
    icon: ShieldCheckIcon,
    name: "Responsabilidad",
    description: "Compromiso real con resultados seguros y sostenidos.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── HERO ──────────────────────────────────────────── */}
        <section
          id="inicio"
          className="relative min-h-screen bg-cream overflow-hidden flex items-center"
        >
          {/* Centered background image — a sheer veil over the cream, not a photo */}
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src="/image2.jpeg"
              alt=""
              fill
              className="object-cover opacity-[0.28]"
              style={{ objectPosition: "40% 25%" }}
              priority
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-cream)_85%)]" />
          </div>

          {/* Botanical decoration, desktop only */}
          <div className="absolute -right-6 bottom-10 w-28 pointer-events-none select-none opacity-15 hidden lg:block">
            <BotanicalSVG />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center text-center px-6 sm:px-10 pt-36 pb-24 lg:pt-32 lg:pb-28 max-w-2xl mx-auto">
            <p className="font-sans text-[10px] tracking-[0.5em] uppercase text-sage mb-8">
              Cosmetología Médica
            </p>

            <h1 className="font-serif font-normal text-brown leading-none">
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

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-brown-light/50">
              Scroll
            </span>
            <div className="w-px h-10 bg-brown-light/25 animate-pulse" />
          </div>
        </section>

        {/* ─── TREATMENT CAROUSEL ────────────────────────────── */}
        <div className="bg-cream-light pt-16 md:pt-20 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Carousel slides={carouselSlides} />
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={`${WA_LINK}?text=${encodeURIComponent(
                    `Hola! Estoy interesad@ en ${service.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col bg-cream-light border border-cream-dark rounded-xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-sage hover:shadow-lg hover:shadow-sage/10"
                >
                  {/* WhatsApp affordance, revealed on hover */}
                  <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-sage flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-cream-light" />
                  </div>

                  <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-sage">
                    <service.icon className="w-6 h-6 text-sage transition-transform duration-300 group-hover:text-cream-light group-hover:scale-110 group-hover:rotate-6" />
                  </div>

                  <h3 className="font-serif text-xl font-medium text-brown mb-2 tracking-wide transition-colors duration-300 group-hover:text-sage-dark">
                    {service.name}
                  </h3>
                  <p className="font-sans text-sm text-brown-light leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-end justify-between gap-4 mt-6 pt-5 border-t border-cream-dark transition-colors duration-300 group-hover:border-sage/30">
                    <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-brown-light/70">
                      ~ {service.duration}
                    </span>
                    <div className="text-right">
                      <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-sage font-medium">
                        {service.price}
                      </span>
                      {service.note && (
                        <p className="font-sans text-[9px] text-brown-light/60 mt-1 leading-snug">
                          {service.note}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-cream-dark">
              <p className="font-serif italic text-brown-mid text-center md:text-left max-w-md text-lg leading-relaxed">
                Precios y duración orientativos. Cada piel es única — evaluamos
                tu caso para diseñar el tratamiento ideal en la consulta.
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
            <div className="pt-10 border-t border-cream-dark">
              <div className="text-center mb-10">
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-sage mb-3">
                  Lo que nos guía
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-brown">
                  Nuestros Valores
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {valores.map((valor) => (
                  <div
                    key={valor.name}
                    className="group flex flex-col items-center text-center bg-cream-light border border-cream-dark rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-md hover:shadow-sage/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-sage">
                      <valor.icon className="w-5 h-5 text-sage transition-all duration-300 group-hover:text-cream-light group-hover:scale-110" />
                    </div>
                    <h4 className="font-serif text-base font-medium text-brown mb-1.5 tracking-wide">
                      {valor.name}
                    </h4>
                    <p className="font-sans text-xs text-brown-light leading-relaxed">
                      {valor.description}
                    </p>
                  </div>
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

function DropletIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M12 2.5s7 7.5 7 12.5a7 7 0 11-14 0c0-5 7-12.5 7-12.5z" />
    </svg>
  );
}

function SparkleIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
    </svg>
  );
}

function SyringeIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M3 21l3-3M13.5 4.5l6 6M16.5 1.5l6 6M5 19l4.5-4.5 1.8 1.8L15 12.6 11.4 9 7.7 12.7l1.8 1.8L5 19zM11 7l6 6" />
    </svg>
  );
}

function BodyIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <circle cx="12" cy="4.5" r="2.5" />
      <path d="M6 21l1.5-8.5a3 3 0 013-2.5h3a3 3 0 013 2.5L18 21M9.5 10.5L9 16h6l-.5-5.5" />
    </svg>
  );
}

function HairIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M6 3c-2 4 2 5 0 9s2 5 0 9M12 3c-2 4 2 5 0 9s2 5 0 9M18 3c-2 4 2 5 0 9s2 5 0 9" />
    </svg>
  );
}

function VialIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M9 2h6M10 2v7.5L5.5 17a3 3 0 002.6 4.5h7.8a3 3 0 002.6-4.5L14 9.5V2M7.5 15h9" />
    </svg>
  );
}

function ZapIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

function DotsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="6" cy="6" r="1.6" />
      <circle cx="12" cy="6" r="1.6" />
      <circle cx="18" cy="6" r="1.6" />
      <circle cx="6" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="18" cy="12" r="1.6" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="12" cy="18" r="1.6" />
      <circle cx="18" cy="18" r="1.6" />
    </svg>
  );
}

function EyeIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17.5" cy="9" r="2.2" />
      <path d="M15.3 14.6c2.2.7 3.8 2.8 4 5.4" />
    </svg>
  );
}

function HeartIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M12 21s-7.5-4.5-9.5-9A5 5 0 0112 6a5 5 0 019.5 6c-2 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

function LockIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  );
}

function ShieldCheckIcon({ className = "w-4 h-4" }: { className?: string }) {
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
      <path d="M12 2.5l7.5 3v6c0 5-3.5 8.5-7.5 10-4-1.5-7.5-5-7.5-10v-6l7.5-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
