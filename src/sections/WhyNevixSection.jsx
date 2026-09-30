import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { WHY_NEVIX_CONCEPTS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const WhyNevixSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            delay: i * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-nevix"
      ref={sectionRef}
      className="relative py-24 sm:py-36 bg-[#EEE8DD]/65 border-t border-[#DDD6CB] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-20">
          <p className="text-xs tracking-[0.26em] uppercase text-[#C97A67] font-bold mb-4">
            WHY NEVIX
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl font-light uppercase text-[#6F6961] tracking-wide leading-tight">
            YOUR BUSINESS DOESN&apos;T NEED
            <br />
            ANOTHER WEBSITE.
          </p>
          <h2 className="mt-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.96]">
            IT NEEDS A{" "}
            <span className="text-[#C97A67]">DIGITAL SYSTEM</span>
            <br />
            THAT WORKS.
          </h2>
        </div>

        {/* Four Animated Pillars: VISIBILITY, CONVERSION, AUTOMATION, SCALABILITY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_NEVIX_CONCEPTS.map((concept, index) => (
            <div
              key={concept.title}
              ref={(el) => (cardsRef.current[index] = el)}
              data-cursor="DISCOVER"
              className="group relative rounded-3xl p-8 sm:p-10 lg:p-12 nevix-card-surface hover:border-[#E7A99A] transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Corner Soft Pastel Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-55 group-hover:opacity-85 transition-opacity duration-500"
                style={{ backgroundColor: concept.surfaceBg }}
              />

              <div className="relative z-10">
                <div className="mb-6">
                  <span
                    className="text-3xl sm:text-4xl font-black"
                    style={{ color: concept.accent }}
                  >
                    {concept.number}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#211F1C] mb-2">
                  {concept.title}
                </h3>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-6 font-bold"
                  style={{ color: concept.accent }}
                >
                  {concept.subtitle}
                </p>
                <p className="text-base sm:text-lg text-[#6F6961] font-light leading-relaxed">
                  {concept.description}
                </p>
              </div>

              {/* Animated Progress Line */}
              <div className="relative z-10 mt-10 pt-6 border-t border-[#DDD6CB]">
                <div className="w-full h-1 rounded-full bg-[#EEE8DD] overflow-hidden">
                  <div
                    className="h-full w-1/3 group-hover:w-full transition-all duration-700"
                    style={{ backgroundColor: concept.accent }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNevixSection;
