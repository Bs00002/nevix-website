import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { INDUSTRIES } from "../constants";

const IndustriesSection = ({ onNavigate }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const detailPanelRef = useRef(null);

  const selectIndustry = (idx) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    if (detailPanelRef.current) {
      gsap.fromTo(
        detailPanelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }
      );
    }
  };

  const current = INDUSTRIES[activeIdx] || INDUSTRIES[0];

  const handleNav = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  return (
    <section
      id="industries"
      className="relative py-24 sm:py-36 bg-[#F8F5EF] border-t border-[#DDD6CB]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-[#C97A67] font-bold mb-3">
              INDUSTRIES
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95]">
              WHO WE
              <br />
              <span className="text-[#C97A67]">WORK WITH.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#6F6961] max-w-md font-light">
            From jewellery showrooms, manufacturers, and agriculture companies
            to healthcare clinics, real estate, personal brands, and local
            businesses—explore how NEVIX builds tailored digital solutions across
            13 industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Interactive Industry List (13 Industries) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[#DDD6CB] border-y border-[#DDD6CB]">
            {INDUSTRIES.map((ind, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={ind.name}
                  type="button"
                  onClick={() => selectIndustry(idx)}
                  onMouseEnter={() => selectIndustry(idx)}
                  data-cursor="EXPLORE"
                  className={`w-full py-4 px-4 text-left flex items-center justify-between transition-all cursor-pointer rounded-xl ${
                    isSelected
                      ? "bg-[#FFFDF8] text-[#211F1C] pl-6 shadow-xs border border-[#DDD6CB]"
                      : "text-[#6F6961] hover:text-[#292622] hover:bg-[#FFFDF8]/60"
                  }`}
                >
                  <span className="text-xl sm:text-2xl font-medium uppercase tracking-wide">
                    {ind.name}
                  </span>
                  <Icon
                    icon="lucide:arrow-right"
                    className={`size-4 transition-transform ${
                      isSelected ? "translate-x-1 text-[#C97A67]" : "opacity-40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Animated Industry Detail Panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div
              ref={detailPanelRef}
              className="rounded-3xl border border-[#DDD6CB] bg-[#FFFDF8] p-8 sm:p-12 shadow-[0_25px_65px_rgba(41,38,34,0.07)] relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-60"
                style={{ backgroundColor: current.pastel }}
              />

              <div className="relative z-10">
                <p
                  className="text-xs font-bold tracking-[0.22em] uppercase mb-3"
                  style={{ color: current.accent }}
                >
                  {current.name}
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#211F1C] mb-4 leading-tight">
                  {current.headline}
                </h3>

                <p className="text-base sm:text-lg text-[#6F6961] font-light leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* Key Industry Solutions */}
                <div className="mb-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#6F6961] mb-4">
                    SOLUTIONS FOR {current.name.toUpperCase()}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.solutions.map((sol) => (
                      <div
                        key={sol}
                        className="p-4 rounded-xl bg-[#F8F5EF] border border-[#DDD6CB] flex items-center gap-3"
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: current.accent }}
                        />
                        <span className="text-sm text-[#292622] font-light">
                          {sol}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Featured Clients in this Industry if available */}
                {current.featuredClients && current.featuredClients.length > 0 && (
                  <div className="mb-8 p-4 rounded-2xl bg-[#EEE8DD]/70 border border-[#DDD6CB] flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-[#6F6961]">
                      PORTFOLIO IN {current.name.toUpperCase()}:
                    </span>
                    {current.featuredClients.map((client) => (
                      <span
                        key={client}
                        className="px-3 py-1 rounded-full text-xs bg-[#FFFDF8] text-[#292622] border border-[#DDD6CB]"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA Link */}
                <div className="pt-6 border-t border-[#DDD6CB] flex flex-wrap items-center justify-between gap-4">
                  {current.hasDedicatedPage ? (
                    <a
                      href={current.slug}
                      onClick={(e) => handleNav(e, current.slug)}
                      data-cursor="OPEN"
                      className="px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase nevix-warm-button transition-all inline-flex items-center gap-2"
                    >
                      <span>EXPLORE {current.name}</span>
                      <Icon icon="lucide:arrow-up-right" className="size-4" />
                    </a>
                  ) : (
                    <a
                      href="/contact"
                      onClick={(e) => handleNav(e, "/contact")}
                      data-cursor="OPEN"
                      className="px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase nevix-warm-button transition-all inline-flex items-center gap-2"
                    >
                      <span>START A PROJECT</span>
                      <Icon icon="lucide:arrow-up-right" className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
