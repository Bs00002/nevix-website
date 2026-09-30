import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SEO_ECOSYSTEM } from "../constants";
import MagneticButton from "../components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const SeoSection = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const pipelineRef = useRef([]);
  const [activeStage, setActiveStage] = useState(0);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pipelineRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  return (
    <section
      id="seo-ecosystem"
      ref={sectionRef}
      className="relative py-24 sm:py-36 bg-[#F8F5EF] border-t border-[#DDD6CB] overflow-hidden nevix-grid-bg"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.26em] uppercase text-[#4B7A63] font-bold mb-4">
              SEARCH &amp; LOCAL VISIBILITY
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95]">
              BE FOUND.
              <br />
              GET CHOSEN.
              <br />
              <span className="text-[#C97A67]">GROW.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#6F6961] font-light leading-relaxed mb-6">
              When buyers in Ahmedabad, Gujarat, or across India search for your
              products or services, your business needs strong visibility on
              Google Search and Google Maps.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton
                href="/contact"
                onClick={(e) => handleNav(e, "/contact")}
                cursorText="OPEN"
                className="px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase nevix-warm-button transition-all gap-2"
              >
                <span>START SEO</span>
                <Icon icon="lucide:arrow-up-right" className="size-4" />
              </MagneticButton>
              <a
                href="/services/seo"
                onClick={(e) => handleNav(e, "/services/seo")}
                data-cursor="EXPLORE"
                className="px-5 py-3.5 rounded-full text-xs tracking-[0.18em] uppercase border border-[#DDD6CB] bg-[#FFFDF8] text-[#292622] hover:border-[#E7A99A] hover:text-[#C97A67] transition-colors inline-flex items-center gap-2"
              >
                <span>Explore SEO Services</span>
                <Icon icon="lucide:arrow-right" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Search Funnel Ecosystem: SEARCH -> VISIBILITY -> TRAFFIC -> LEADS -> CUSTOMERS */}
        <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-[#FFFDF8] border border-[#DDD6CB] shadow-[0_18px_50px_rgba(41,38,34,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
            {SEO_ECOSYSTEM.steps.map((step, idx) => {
              const isCurrent = activeStage === idx;
              return (
                <div
                  key={step.name}
                  ref={(el) => (pipelineRef.current[idx] = el)}
                  onMouseEnter={() => setActiveStage(idx)}
                  onClick={() => setActiveStage(idx)}
                  data-cursor="DISCOVER"
                  className={`relative rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? "bg-[#DCE9E2]/65 border-[#4B7A63]/60 shadow-[0_12px_30px_rgba(75,122,99,0.12)]"
                      : "bg-[#F8F5EF] border-[#DDD6CB] hover:border-[#E7A99A]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold text-[#4B7A63]">
                        {step.stage}
                      </span>
                      {idx < SEO_ECOSYSTEM.steps.length - 1 ? (
                        <Icon
                          icon="lucide:arrow-down"
                          className="size-4 text-[#C97A67] lg:rotate-[-90deg]"
                        />
                      ) : (
                        <Icon
                          icon="lucide:check-circle-2"
                          className="size-4 text-[#4B7A63]"
                        />
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#211F1C] mb-3">
                      {step.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6F6961] font-light leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8 Core SEO Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SEO_ECOSYSTEM.capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="p-6 rounded-2xl nevix-card-surface hover:border-[#E7A99A] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-[#C97A67] block mb-2">
                  0{i + 1}
                </span>
                <h4 className="text-lg font-bold uppercase tracking-wide text-[#211F1C] mb-2">
                  {cap.title}
                </h4>
                <p className="text-sm text-[#6F6961] font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
