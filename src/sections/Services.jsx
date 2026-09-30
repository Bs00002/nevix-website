import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react/dist/iconify.js";
import { SERVICE_CATEGORIES, BRAND } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("ALL");

  useGSAP(() => {
    const ctx = gsap.context(() => {
      categoryRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategoryFilter]);

  const handleNav = (e, slug) => {
    e.preventDefault();
    if (onNavigate) onNavigate(slug);
  };

  const filteredCategories =
    activeCategoryFilter === "ALL"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.category === activeCategoryFilter);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 sm:py-36 bg-[#F8F5EF] border-t border-[#DDD6CB]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-[#C97A67] font-bold mb-3">
              OUR SERVICES
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95]">
              BUILD. GROW.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C97A67] via-[#746291] to-[#4B7A63]">
                AUTOMATE. SUPPORT.
              </span>
            </h2>
          </div>
          <div className="max-w-xl space-y-5">
            <p className="text-base sm:text-lg text-[#6F6961] font-light leading-relaxed">
              Explore all 20 digital solutions across our 4 core categories—from
              website and e-commerce development to SEO, digital marketing, AI
              chatbots, CRM/ERP software, and ongoing maintenance.
            </p>
            {/* Clean Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {["ALL", "BUILD", "GROW", "AUTOMATE", "SUPPORT"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategoryFilter(cat)}
                  data-cursor="EXPLORE"
                  className={`px-4 py-2 rounded-full text-xs tracking-[0.18em] uppercase border transition-all cursor-pointer ${
                    activeCategoryFilter === cat
                      ? "bg-[#211F1C] text-[#FFFDF8] border-[#211F1C] font-bold"
                      : "bg-[#FFFDF8] text-[#292622] border-[#DDD6CB] hover:border-[#E7A99A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Animated Service Categories & 20 Animated Cards */}
        <div className="space-y-24">
          {filteredCategories.map((group, groupIndex) => (
            <div
              key={group.category}
              ref={(el) => (categoryRefs.current[groupIndex] = el)}
              className="relative"
            >
              {/* Clean Category Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-[#DDD6CB] gap-4">
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#211F1C]">
                  {group.category}
                </h3>
                <p className="text-xs sm:text-sm tracking-widest uppercase text-[#6F6961]">
                  {group.tagline}
                </p>
              </div>

              {/* Animated Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.services.map((service) => {
                  const cardId = `${group.category}-${service.number}`;
                  const isHovered = hoveredCard === cardId;

                  return (
                    <div
                      key={cardId}
                      onMouseEnter={() => setHoveredCard(cardId)}
                      onMouseLeave={() => setHoveredCard(null)}
                      data-cursor="EXPLORE"
                      className="group relative rounded-3xl border border-[#DDD6CB] bg-[#FFFDF8] p-7 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#E7A99A] shadow-[0_14px_35px_rgba(41,38,34,0.05)] hover:shadow-[0_24px_55px_rgba(41,38,34,0.1)]"
                    >
                      {/* Soft Pastel Ambient Aura on Hover */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-20 -right-20 w-52 h-52 rounded-full blur-3xl opacity-25 group-hover:opacity-75 transition-opacity duration-500"
                        style={{ backgroundColor: group.surfaceTint }}
                      />

                      {/* Animated Bottom Accent Bar */}
                      <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
                        style={{ backgroundColor: group.accent }}
                      />

                      <div className="relative z-10">
                        {/* Top Row: Clean Number & Animated Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <span
                            className="text-sm font-bold tracking-widest"
                            style={{ color: group.accent }}
                          >
                            {service.number}
                          </span>
                          <div
                            className="w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                            style={{
                              backgroundColor: isHovered
                                ? group.surfaceTint
                                : "#F8F5EF",
                              borderColor: isHovered ? group.accent : "#DDD6CB",
                              color: group.accent,
                            }}
                          >
                            <Icon
                              icon={service.icon || "lucide:layers"}
                              className="size-6 transition-transform duration-500"
                            />
                          </div>
                        </div>

                        {/* Service Title */}
                        <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#211F1C] mb-3 group-hover:text-[#C97A67] transition-colors">
                          {service.title}
                        </h4>

                        {/* Description Reveal */}
                        <p className="text-sm text-[#6F6961] group-hover:text-[#292622] font-light leading-relaxed mb-5 transition-colors duration-300">
                          {service.shortDesc}
                        </p>

                        {/* Sub-Capabilities / Service Items */}
                        <ul className="space-y-1.5 mb-6 border-t border-[#DDD6CB]/80 pt-4">
                          {service.tags.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-xs text-[#292622] font-light"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: group.accent }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Animated CTA Reveal Footer */}
                      <div className="relative z-10 pt-4 border-t border-[#DDD6CB] flex items-center justify-between gap-3">
                        <a
                          href={service.slug}
                          onClick={(e) => handleNav(e, service.slug)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.16em] uppercase text-[#211F1C] group-hover:text-[#C97A67] transition-colors"
                        >
                          <span>EXPLORE</span>
                          <Icon
                            icon="lucide:arrow-up-right"
                            className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          />
                        </a>

                        <a
                          href={service.whatsappHref || BRAND.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium tracking-wider uppercase text-[#6F6961] hover:text-[#211F1C] transition-colors inline-flex items-center gap-1"
                        >
                          <span>WhatsApp</span>
                          <Icon icon="lucide:arrow-up-right" className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
