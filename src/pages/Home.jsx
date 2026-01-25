import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero.jpg";

/* Client logos / names */
const CLIENTS = [
  "MAGENTA K LTD",
  "HAWK AIRFREIGHT AND LOGISTICS LTD",
  "TELESRAYS KENYA LTD",
  "MANAGE IT",
];

/* Stats data */
const STATS = [
  { label: "Years of Experience", value: 7, suffix: "+" },
  { label: "Projects Delivered", value: 43, suffix: "+" },
  { label: "Client Satisfaction", value: 91, suffix: "%" },
];

/* Testimonials */
const TESTIMONIALS = [
  {
    quote:
      "Pegrumme Consulting helped us streamline operations and scale faster than we imagined.",
    author: "Sarah M.",
    role: "CEO, Hawk Airfreight and Logistics Ltd",
  },
  {
    quote:
      "Their strategic insight and technical expertise made a real impact on our growth.",
    author: "David L.",
    role: "CTO, Magenta (K) Africa",
  },
  {
    quote:
      "Professional, reliable, and results-driven. A true partner in success.",
    author: "Emily R.",
    role: "COO, Manage IT",
  },
];

export default function Home() {
  const clientsRef = useRef(null);
  const speedRef = useRef(0.5);

  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counts, setCounts] = useState(STATS.map(() => 0));

  const testimonialsRef = useRef(null);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  /* ================= CLIENT MARQUEE (INFINITE) ================= */
  useEffect(() => {
    const container = clientsRef.current;
    if (!container) return;

    // Adjust speed for mobile
    const isMobile = window.innerWidth < 768;
    speedRef.current = isMobile ? 0.3 : 0.5;

    // Clone children for infinite scrolling
    const children = Array.from(container.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      container.appendChild(clone);
    });

    container.scrollLeft = 0;
    let rafId;

    const animate = () => {
      container.scrollLeft += speedRef.current;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    const pause = () => (speedRef.current = 0);
    const play = () =>
      (speedRef.current = isMobile ? 0.3 : 0.5); /* restore speed */

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", play);

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", play);
    };
  }, []);

  /* ================= STATS ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.4 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;
    const intervals = STATS.map((stat, i) =>
      setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[i] < stat.value) updated[i] += 1;
          return updated;
        });
      }, 20),
    );
    return () => intervals.forEach(clearInterval);
  }, [statsVisible]);

  /* ================= TESTIMONIALS ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTestimonialsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative text-white flex items-center justify-center h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            We Help Businesses Grow
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
            Strategic, technical, and operational consulting designed to help
            ambitious companies scale with confidence.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-700 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Consultation
            </button>
          </Link>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="bg-white dark:bg-gray-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-gray-100">
            Trusted by Leading Companies
          </h2>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

            {/* Infinite marquee */}
            <div
              ref={clientsRef}
              className="flex gap-8 sm:gap-16 items-center overflow-x-hidden whitespace-nowrap select-none"
            >
              {CLIENTS.map((name) => (
                <div
                  key={name}
                  className="h-10 sm:h-12 flex items-center justify-center flex-shrink-0 text-lg sm:text-xl font-bold tracking-wider text-gray-700 dark:text-gray-300 opacity-80 hover:opacity-100 transition"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section
        ref={statsRef}
        className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 text-center">
          {STATS.map((stat, i) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400">
                {counts[i]}
                {stat.suffix}
              </p>
              <p className="mt-1 sm:mt-2 text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section
        ref={testimonialsRef}
        className="bg-white dark:bg-gray-900 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12 text-gray-800 dark:text-gray-100">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md transform transition-all ${
                  testimonialsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300 mb-2 sm:mb-4">
                  “{t.quote}”
                </p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {t.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
