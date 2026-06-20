"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
  label: string;
  caption: string;
  /** CSS object-position value, e.g. "center 80%" to favor the lower part of the photo */
  position?: string;
}

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-cream-dark border border-cream-dark">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide) => (
          <div key={slide.src} className="relative h-full w-full shrink-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              style={{ objectPosition: slide.position ?? "center" }}
            />
            <div className="absolute inset-0 bg-brown/35" />
            <div className="absolute bottom-5 left-6 sm:bottom-7 sm:left-8">
              <p className="font-sans text-[8px] sm:text-[9px] tracking-[0.4em] uppercase text-cream/60 mb-1">
                {slide.label}
              </p>
              <p className="font-serif text-lg sm:text-2xl text-cream/90 font-light">
                {slide.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brown/30 backdrop-blur-sm flex items-center justify-center text-cream-light hover:bg-brown/50 transition-colors duration-200"
      >
        <ChevronIcon className="w-4 h-4 rotate-180" />
      </button>
      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brown/30 backdrop-blur-sm flex items-center justify-center text-cream-light hover:bg-brown/50 transition-colors duration-200"
      >
        <ChevronIcon className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 right-6 sm:bottom-7 sm:right-8 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => goTo(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
              i === index ? "bg-cream-light" : "bg-cream-light/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ChevronIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
