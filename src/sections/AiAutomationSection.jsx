import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react/dist/iconify.js";
import { AI_WORKFLOW_STEPS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AiAutomationSection = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const nodesRef = useRef([]);
  const [activeNode, setActiveNode] = useState(0);

  // Automatically pulse through the 6-step AI workflow
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % AI_WORKFLOW_STEPS.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        nodesRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
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
      id="ai-automation"
      ref={sectionRef}
      className="relative py-24 sm:py-36 bg-[#EEE8DD]/60 border-t border-[#DDD6CB] overflow-hidden"
    >
      {/* Subtle Soft Lavender & Peach Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] rounded-full bg-[#DCD3EA]/55 blur-[120px]"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-[#746291] font-bold mb-4">
              AI &amp; BUSINESS AUTOMATION
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95]">
              LET AI HANDLE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C97A67] via-[#746291] to-[#9E7B47]">
                THE REPETITIVE WORK.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-base sm:text-lg text-[#6F6961] font-light leading-relaxed">
              From website AI chatbots and AI agents to WhatsApp integration,
              CRM workflows, and automated customer follow-ups.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/services/ai-agents"
                onClick={(e) => handleNav(e, "/services/ai-agents")}
                data-cursor="EXPLORE"
                className="px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase nevix-warm-button transition-all inline-flex items-center gap-2"
              >
                <span>Explore AI Agents</span>
                <Icon icon="lucide:arrow-up-right" className="size-4" />
              </a>
              <a
                href="/services/business-automation"
                onClick={(e) => handleNav(e, "/services/business-automation")}
                data-cursor="EXPLORE"
                className="px-5 py-2.5 rounded-full text-xs tracking-[0.18em] uppercase border border-[#DDD6CB] bg-[#FFFDF8] text-[#292622] hover:border-[#E7A99A] transition-colors inline-flex items-center gap-2"
              >
                <span>Business Automation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Animated Connection Workflow: LEAD -> AI -> QUALIFICATION -> CRM -> FOLLOW-UP -> CONVERSION */}
        <div className="relative">
          {/* Desktop Horizontal Connection Line */}
          <div
            aria-hidden="true"
            className="hidden xl:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#DDD6CB] -translate-y-1/2 z-0"
          >
            <div
              className="h-full bg-gradient-to-r from-[#E7A99A] via-[#DCD3EA] to-[#E6D5B8] transition-all duration-700"
              style={{
                width: `${((activeNode + 1) / AI_WORKFLOW_STEPS.length) * 100}%`,
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">
            {AI_WORKFLOW_STEPS.map((node, index) => {
              const isActive = activeNode === index;
              const isPassed = index <= activeNode;
              return (
                <div key={node.id} className="flex flex-col items-center">
                  <div
                    ref={(el) => (nodesRef.current[index] = el)}
                    onMouseEnter={() => setActiveNode(index)}
                    onClick={() => setActiveNode(index)}
                    data-cursor="DISCOVER"
                    className={`w-full h-full rounded-2xl p-6 border transition-all duration-500 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? "bg-[#FFFDF8] border-[#C97A67] shadow-[0_20px_45px_rgba(201,122,103,0.16)] -translate-y-2"
                        : isPassed
                        ? "bg-[#FFFDF8] border-[#DDD6CB] shadow-xs"
                        : "bg-[#FFFDF8]/75 border-[#DDD6CB]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-xs font-bold tracking-widest uppercase"
                          style={{ color: node.accent }}
                        >
                          {node.step}
                        </span>
                      </div>

                      <h3 className="text-xl xl:text-2xl font-black uppercase tracking-wide text-[#211F1C] mb-1">
                        {node.label}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#6F6961] mb-4">
                        {node.sublabel}
                      </p>
                      <p className="text-xs sm:text-sm text-[#6F6961] font-light leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAutomationSection;
