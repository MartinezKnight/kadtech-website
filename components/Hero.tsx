"use client";

import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

interface HeroSlide {
  id: string;
  image: string;
  label: string;
}

const HERO_SLIDES: HeroSlide[] = [
  { id: "smartphones", image: "/hero/slide-smartphones.jpg", label: "Smartphones" },
  { id: "laptops", image: "/hero/slide-laptops.jpg", label: "Laptops" },
  { id: "cameras", image: "/hero/slide-cameras.jpg", label: "Cameras" },
  { id: "drones", image: "/hero/slide-drones.jpg", label: "Drones" },
  { id: "speakers", image: "/hero/slide-speakers.jpg", label: "Bluetooth Speakers" },
  { id: "accessories", image: "/hero/slide-accessories.jpg", label: "Accessories" },
];

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -40]);

  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex(((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [shouldReduceMotion]);

  const slide = HERO_SLIDES[index];

  return (
    <section ref={ref} className="relative h-[92vh] min-h-[640px] overflow-hidden bg-midnight-900">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}'), radial-gradient(circle at 30% 20%, rgba(62,107,255,0.25), transparent 55%), radial-gradient(circle at 75% 70%, rgba(124,156,255,0.15), transparent 50%), linear-gradient(180deg, #0B1220 0%, #070C16 100%)`,
              }}
            />
            {/* Darkening overlay so white headline text stays readable over any photo */}
            <div className="absolute inset-0 bg-midnight-900/45" />
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
              <span className="font-display font-bold text-[38vw] leading-none text-offwhite">K</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-x-0 bottom-8 md:bottom-10 z-20 container-kad flex items-center justify-between">
        <div className="flex gap-2">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Show ${s.label} slide`}
              aria-current={i === index}
              className={`h-1 transition-all duration-300 ${
                i === index ? "w-8 bg-offwhite" : "w-4 bg-offwhite/30 hover:bg-offwhite/60"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-10 h-10 flex items-center justify-center border border-offwhite/25 text-offwhite hover:border-offwhite transition-colors"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-10 h-10 flex items-center justify-center border border-offwhite/25 text-offwhite hover:border-offwhite transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative z-10 h-full container-kad flex flex-col justify-end pb-32 md:pb-28">
        <motion.div style={{ y: textY }}>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-offwhite text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest"
          >
            YOUR TECH.
            <br />
            YOUR NEXT MOVE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-body text-silver text-lg md:text-xl tracking-wide"
          >
            BUY. SELL. SWAP. FIX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/shop" className="bg-offwhite text-midnight font-display font-medium tracking-tight px-7 py-4 hover:bg-electric-soft transition-colors duration-300">
              EXPLORE THE STORE
            </Link>
            <Link href="/store" className="border border-offwhite/30 text-offwhite font-display font-medium tracking-tight px-7 py-4 hover:border-offwhite transition-colors duration-300">
              VISIT KADTECH
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
