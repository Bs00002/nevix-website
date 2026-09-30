import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PILLARS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const BuildAutomateGrow = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const stageRefs = useRef([]);
  const [activePillar, setActivePillar] = useState(0);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      stageRefs.current.forEach((el, index) => {
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setActivePillar(index),
          onEnterBack: () => setActivePillar(index),
        });

        gsap.fromTo(
          el,
          { y: 60, opacity: 0.25 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = PILLARS[activePillar] || PILLARS[0];

  const handleNav = (e, slug) => {
    e.preventDefault();
    if (onNavigate) onNavigate(slug);
  };

  return (
    <section
      id="build-automate-grow"
      ref={sectionRef}
      className="relative py-24 sm:py-36 border-t border-[#DDD6CB] transition-colors duration-700"
      style={{
        background: `radial-gradient(circle at 20% 30%, ${current.pastelBg}75 0%, #F8F5EF 68%)`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#DDD6CB] gap-6">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-[#C97A67] font-bold mb-3">
              HOW WE WORK
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C]">
              BUILD <span className="text-[#6F6961]/50">•</span> AUTOMATE{" "}
              <span className="text-[#6F6961]/50">•</span> GROW
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6F6961] max-w-md font-light">
            One partner for all digital solutions—from building your website and
            custom software to automating workflows and growing your visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sticky Interactive Visualizer */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 rounded-3xl border border-[#DDD6CB] bg-[#FFFDF8]/95 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_55px_rgba(41,38,34,0.08)]">
            {/* Stage Selector Tabs */}
            <div className="flex items-center justify-between gap-2 pb-6 border-b border-[#DDD6CB]">
              {PILLARS.map((pillar, idx) => {
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => {
                      setActivePillar(idx);
                      stageRefs.current[idx]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    data-cursor="EXPLORE"
                    className={`flex-1 py-2.5 px-3 rounded-xl text-xs tracking-[0.18em] uppercase transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#E6D5B8] text-[#211F1C] font-bold shadow-xs"
                        : "bg-[#F8F5EF] text-[#6F6961] hover:text-[#292622]"
                    }`}
                  >
                    {pillar.word}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Architectural Diagram */}
            <div className="py-10 flex flex-col items-center justify-center relative">
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-full flex items-center justify-center relative transition-all duration-700"
                style={{
                  backgroundColor: `${current.pastelBg}55`,
                  border: `1.5px solid ${current.accent}66`,
                  boxShadow: `0 16px 45px ${current.pastelBg}, inset 0 0 25px #FFFDF8`,
                }}
              >
                <div
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-dashed border-[#292622]/25 flex flex-col items-center justify-center text-center p-4 animate-[spin_28s_linear_infinite]"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span
                    className="text-xs tracking-[0.25em] uppercase font-bold"
                    style={{ color: current.accent }}
                  >
                    {current.index}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#211F1C] mt-1">
                    {current.word}
                  </span>
                </div>
              </div>

              {/* Clean Focus Areas */}
              <div className="mt-8 w-full">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {current.architectureNodes.map((node) => (
                    <span
                      key={node}
                      className="px-3.5 py-1.5 rounded-lg text-xs border border-[#DDD6CB] bg-[#F8F5EF] text-[#292622]"
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Scroll-Driven Pillar Stages */}
          <div className="lg:col-span-7 space-y-16 sm:space-y-24">
            {PILLARS.map((pillar, index) => (
              <div
                key={pillar.id}
                ref={(el) => (stageRefs.current[index] = el)}
                onMouseEnter={() => setActivePillar(index)}
                className={`rounded-3xl p-6 sm:p-10 lg:p-12 border transition-all duration-500 ${
                  activePillar === index
                    ? "bg-[#FFFDF8] border-[#E7A99A] shadow-[0_20px_50px_rgba(41,38,34,0.08)]"
                    : "bg-[#FFFDF8]/80 border-[#DDD6CB]"
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span
                    className="text-sm font-bold tracking-[0.22em] uppercase"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.index}
                  </span>
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#211F1C] mb-3">
                  {pillar.word}
                </h3>
                <p
                  className="text-sm sm:text-base tracking-[0.15em] uppercase mb-5 font-bold"
                  style={{ color: pillar.accent }}
                >
                  {pillar.headline}
                </p>
                <p className="text-base sm:text-lg text-[#6F6961] font-light leading-relaxed mb-8">
                  {pillar.subtitle}
                </p>

                {/* Clean Capability Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {pillar.capabilities.map((cap) => (
                    <a
                      key={cap.name}
                      href={cap.slug}
                      onClick={(e) => handleNav(e, cap.slug)}
                      data-cursor="OPEN"
                      className="group p-4 rounded-2xl border border-[#DDD6CB] bg-[#F8F5EF] hover:bg-[#FFFDF8] hover:border-[#E7A99A] transition-all flex items-center justify-between"
                    >
                      <span className="text-sm sm:text-base font-medium text-[#292622] group-hover:text-[#C97A67] transition-colors">
                        {cap.name}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#DDD6CB] bg-[#FFFDF8] flex items-center justify-center group-hover:bg-[#E7A99A] group-hover:text-[#211F1C] transition-all">
                        <Icon icon="lucide:arrow-up-right" className="size-4" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAutomateGrow;
