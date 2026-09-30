import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import MagneticButton from "../components/MagneticButton";
import { BRAND } from "../constants";

const NevixCore3D = lazy(() => import("../components/NevixCore3D"));

const HERO_WORDS = [
  {
    word: "BUILD.",
    stateIndex: 0,
    color: "#C97A67",
    wash: "rgba(243, 207, 194, 0.52)",
    detail: "Websites • Custom Web • E-Commerce • Landing Pages • Portfolios • Software",
  },
  {
    word: "AUTOMATE.",
    stateIndex: 1,
    color: "#746291",
    wash: "rgba(220, 211, 234, 0.52)",
    detail: "AI Chatbots • AI Agents • Business Automation • CRM / ERP • WhatsApp",
  },
  {
    word: "GROW.",
    stateIndex: 2,
    color: "#9E7B47",
    wash: "rgba(230, 213, 184, 0.55)",
    detail: "SEO • Local SEO • Google Business Profile • Digital Marketing • Google Ads",
  },
];

const Hero = ({ onNavigate }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [activeIdx, setActiveIdx] = useState(0);
  const heroSectionRef = useRef(null);
  const wordRef = useRef(null);
  const metaRef = useRef(null);
  const contentRef = useRef(null);
  const coreWrapperRef = useRef(null);

  // Cycle BUILD. -> AUTOMATE. -> GROW. automatically with smooth GSAP transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % HERO_WORDS.length);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  // Animate word transition whenever activeIdx changes
  useEffect(() => {
    if (!wordRef.current || !metaRef.current) return;
    gsap.fromTo(
      wordRef.current,
      { y: 36, opacity: 0, filter: "blur(6px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.65, ease: "power3.out" }
    );
    gsap.fromTo(
      metaRef.current,
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.08 }
    );
  }, [activeIdx]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-reveal-item", {
      y: 45,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.15,
    });

    if (coreWrapperRef.current && heroSectionRef.current) {
      gsap.to(coreWrapperRef.current, {
        yPercent: 18,
        scale: 0.92,
        scrollTrigger: {
          trigger: heroSectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const currentHeroState = HERO_WORDS[activeIdx];

  const handleNav = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  return (
    <section
      id="home"
      ref={heroSectionRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pb-16 bg-[#F8F5EF] nevix-grid-bg"
    >
      {/* Background Warm Cream / Peach / Lavender / Champagne Radial Aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at 65% 45%, ${currentHeroState.wash} 0%, rgba(230, 213, 184, 0.25) 42%, rgba(248, 245, 239, 0.96) 78%)`,
        }}
      />

      {/* Interactive 3D NEVIX Digital Core */}
      <div
        ref={coreWrapperRef}
        className="absolute inset-0 z-0 pointer-events-auto opacity-95 lg:translate-x-[16%]"
      >
        <Suspense fallback={null}>
          <NevixCore3D activeState={activeIdx} isMobile={isMobile} />
        </Suspense>
      </div>

      {/* Main Hero Typography & Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 my-auto py-12 lg:py-16 pointer-events-none"
      >
        <div className="max-w-4xl">
          {/* Primary Crawlable SEO H1 */}
          <h1 className="sr-only">Build. Automate. Grow.</h1>

          {/* Clean Interactive Word Switcher */}
          <div className="hero-reveal-item flex flex-wrap items-center gap-6 sm:gap-8 mb-3">
            {HERO_WORDS.map((item, idx) => (
              <button
                key={item.word}
                type="button"
                onClick={() => setActiveIdx(idx)}
                data-cursor="EXPLORE"
                className={`pointer-events-auto text-xs sm:text-sm tracking-[0.25em] uppercase transition-all cursor-pointer ${
                  activeIdx === idx
                    ? "text-[#211F1C] font-bold"
                    : "text-[#6F6961]/65 hover:text-[#292622]"
                }`}
              >
                {item.word}
              </button>
            ))}
          </div>

          {/* Giant Animated Kinetic Word: BUILD. / AUTOMATE. / GROW. */}
          <div aria-hidden="true" className="overflow-hidden py-1">
            <div
              ref={wordRef}
              className="banner-text-responsive font-black uppercase tracking-tight select-none text-[#211F1C]"
              style={{
                textShadow: `0 12px 45px ${currentHeroState.wash}`,
              }}
            >
              {currentHeroState.word}
            </div>
          </div>

          {/* Clean Secondary Positioning Typography (No pill box) */}
          <div
            ref={metaRef}
            className="mt-3 mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
          >
            <p
              className="text-xs sm:text-sm font-bold tracking-[0.24em] uppercase"
              style={{ color: currentHeroState.color }}
            >
              {BRAND.secondaryTagline}
            </p>
            <span className="hidden sm:inline text-[#DDD6CB]">•</span>
            <p className="text-xs tracking-[0.16em] uppercase text-[#6F6961]">
              {currentHeroState.detail}
            </p>
          </div>

          {/* Official Supporting Headline */}
          <p className="hero-reveal-item text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-[#292622] leading-snug max-w-2xl">
            Digital solutions that help your business{" "}
            <span className="text-[#C97A67] font-medium">build</span> a stronger
            online presence,{" "}
            <span className="text-[#746291] font-medium">automate</span>{" "}
            repetitive work and{" "}
            <span className="text-[#9E7B47] font-medium">grow</span>.
          </p>

          {/* Clean Hero CTAs */}
          <div className="hero-reveal-item mt-9 flex flex-wrap items-center gap-4 pointer-events-auto">
            <MagneticButton
              href="/#contact"
              onClick={(e) => handleNav(e, "/#contact")}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] uppercase nevix-warm-button transition-all gap-2.5"
            >
              <span>START YOUR PROJECT</span>
              <Icon icon="lucide:arrow-up-right" className="size-4" />
            </MagneticButton>

            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.18em] uppercase bg-[#DCE9E2] border border-[#4B7A63]/50 text-[#211F1C] hover:bg-[#cbe0d4] transition-all inline-flex items-center gap-2 shadow-xs"
            >
              <Icon icon="lucide:message-circle" className="size-4 text-[#4B7A63]" />
              <span>WHATSAPP DIRECT</span>
            </a>

            <MagneticButton
              href="/#services"
              onClick={(e) => handleNav(e, "/#services")}
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-medium tracking-[0.2em] uppercase border border-[#DDD6CB] bg-[#FFFDF8]/95 backdrop-blur-md text-[#292622] hover:border-[#E7A99A] hover:bg-[#EEE8DD]/60 transition-all"
            >
              <span>EXPLORE OUR SERVICES</span>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Minimal Editorial Bottom Strip */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 pt-4 border-t border-[#DDD6CB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#6F6961]">
        <span className="tracking-[0.22em] uppercase">
          {BRAND.location}
        </span>
        <a
          href="/#intro"
          onClick={(e) => handleNav(e, "/#intro")}
          data-cursor="DISCOVER"
          className="inline-flex items-center gap-2 text-[#292622] hover:text-[#C97A67] tracking-[0.2em] uppercase transition-colors"
        >
          <span>SCROLL</span>
          <Icon icon="lucide:arrow-down" className="size-4 animate-bounce text-[#C97A67]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
