import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { PROJECTS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Works = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!trackRef.current || !sectionRef.current) return;
      const getScrollAmount = () => {
        const trackWidth = trackRef.current.scrollWidth;
        return -(trackWidth - window.innerWidth + 120);
      };

      gsap.to(trackRef.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${Math.abs(getScrollAmount())}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  const handleNav = (e, slug) => {
    e.preventDefault();
    if (onNavigate) onNavigate(`/work/${slug}`);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen bg-[#F8F5EF] border-t border-[#DDD6CB] overflow-hidden flex flex-col justify-between py-20 lg:py-14"
    >
      {/* Top Section Header */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 mb-10 lg:mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.26em] uppercase text-[#C97A67] font-bold mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C] leading-none">
            SELECTED WORK.
          </h2>
        </div>
        <div className="text-xs uppercase tracking-widest text-[#6F6961]">
          <span>OUR PROJECTS</span>
        </div>
      </div>

      {/* Horizontal Scroll Track (Desktop) / Vertical Stack (Mobile & Tablet) */}
      <div className="w-full overflow-visible px-4 sm:px-6 lg:px-10 my-auto">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full lg:w-max"
        >
          {PROJECTS.map((project, index) => {
            const isHovered = activeIndex === index;
            return (
              <article
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                data-cursor="VIEW"
                className={`group relative w-full lg:w-[620px] xl:w-[680px] flex-shrink-0 rounded-3xl border bg-[#FFFDF8] overflow-hidden transition-all duration-500 hover:border-[#E7A99A] flex flex-col justify-between shadow-[0_18px_45px_rgba(41,38,34,0.06)] ${
                  isHovered ? "border-[#C97A67]/60" : "border-[#DDD6CB]"
                }`}
              >
                {/* Interactive Architectural Visual Canvas Preview */}
                <div
                  className="relative h-64 sm:h-72 w-full overflow-hidden p-6 sm:p-8 flex flex-col justify-between border-b border-[#DDD6CB]"
                  style={{ background: project.bgGradient }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 nevix-grid-bg opacity-65 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full border group-hover:scale-125 transition-transform duration-700"
                    style={{ borderColor: `${project.accent}45` }}
                  />

                  {/* Clean Top Info */}
                  <div className="relative z-10 flex items-center justify-between gap-4 text-xs tracking-[0.2em] uppercase">
                    <span
                      className="font-bold"
                      style={{ color: project.accent }}
                    >
                      {project.category}
                    </span>
                    <span className="text-[#6F6961]">
                      {project.location}
                    </span>
                  </div>

                  {/* Center Project Name */}
                  <div className="relative z-10 my-auto">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-[#6F6961] mb-1">
                      {project.year}
                    </p>
                    <h3 className="text-3xl sm:text-4xl xl:text-5xl font-black uppercase tracking-tight text-[#211F1C] group-hover:translate-x-2 transition-transform duration-500">
                      {project.name}
                    </h3>
                  </div>

                  {/* Hover Bar */}
                  <div
                    aria-hidden="true"
                    className="relative z-10 h-1 w-full bg-[#DDD6CB]/70 rounded-full overflow-hidden"
                  >
                    <div
                      className="h-full w-1/4 group-hover:w-full transition-all duration-700 ease-out"
                      style={{ backgroundColor: project.accent }}
                    />
                  </div>
                </div>

                {/* Project Body & Genuine Scope */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-sm sm:text-base text-[#6F6961] font-light leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.servicesProvided.map((srv) => (
                        <span
                          key={srv}
                          className="px-3 py-1 rounded-lg text-[11px] uppercase tracking-wider bg-[#F8F5EF] border border-[#DDD6CB] text-[#292622]"
                        >
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#DDD6CB] flex items-center justify-between">
                    <span className="text-xs text-[#6F6961] uppercase tracking-widest">
                      0{index + 1}
                    </span>
                    <a
                      href={`/work/${project.slug}`}
                      onClick={(e) => handleNav(e, project.slug)}
                      data-cursor="VIEW"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#211F1C] group-hover:text-[#C97A67] transition-colors"
                    >
                      <span>VIEW PROJECT →</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Bottom Progress Indicator */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 mt-10 lg:mt-6 flex items-center justify-end text-xs text-[#6F6961]">
        <div className="flex items-center gap-2">
          {PROJECTS.map((proj, i) => (
            <span
              key={proj.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-8 bg-[#C97A67]" : "w-2 bg-[#DDD6CB]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
