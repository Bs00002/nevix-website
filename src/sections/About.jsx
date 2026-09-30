import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react/dist/iconify.js";
import { BRAND } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const STATEMENT_LINES = [
  {
    index: "01",
    text: "WE BUILD.",
    accent: "#C97A67",
    sub: "Websites, Custom Websites, E-Commerce, Landing Pages, Portfolios & Custom Software",
  },
  {
    index: "02",
    text: "WE AUTOMATE.",
    accent: "#746291",
    sub: "AI Chatbots, AI Agents, Business Automation, CRM / ERP Solutions & WhatsApp",
  },
  {
    index: "03",
    text: "WE HELP BUSINESSES GROW.",
    accent: "#4B7A63",
    sub: "SEO, Local SEO, Google Business Profile, Digital Marketing, Social Media & Google Ads",
  },
];

const About = ({ onNavigate, isStandalonePage = false }) => {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      lineRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 70, opacity: 0.15 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              end: "top 45%",
              scrub: 0.4,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative ${
        isStandalonePage ? "pt-32 pb-24" : "py-24 sm:py-36"
      } bg-[#EEE8DD]/60 border-t border-[#DDD6CB] overflow-hidden`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14 pb-6 border-b border-[#DDD6CB]">
          <span className="text-xs tracking-[0.26em] uppercase text-[#C97A67] font-bold">
            ABOUT {BRAND.name}
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-[#6F6961]">
            {BRAND.location}
          </span>
        </div>

        {/* Dedicated /about H1 when on /about route */}
        {isStandalonePage && (
          <div className="mb-14">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.96]">
              We Build. We Automate. We Help Businesses Grow.
            </h1>
          </div>
        )}

        {/* Scroll-Revealed Large Cinematic Typography */}
        <div className="space-y-12 sm:space-y-16 mb-20">
          {STATEMENT_LINES.map((item, i) => (
            <div
              key={item.index}
              ref={(el) => (lineRefs.current[i] = el)}
              className="group border-b border-[#DDD6CB] pb-8"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold tracking-[0.25em] uppercase"
                  style={{ color: item.accent }}
                >
                  {item.index}
                </span>
                <span className="text-xs text-[#6F6961]">
                  {item.sub}
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.96]">
                {item.text}
              </h2>
            </div>
          ))}
        </div>

        {/* Verified NEVIX About & Founder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={BRAND.logo}
                alt="NEVIX Official Brand Logo"
                className="w-16 h-16 object-contain rounded-xl border border-[#DDD6CB] bg-[#FFFDF8] p-1"
              />
              <div>
                <p className="text-xl font-black tracking-[0.2em] text-[#211F1C]">
                  {BRAND.name}
                </p>
                <p className="text-xs text-[#C97A67] font-bold tracking-[0.18em]">
                  {BRAND.tagline}
                </p>
                <p className="text-[11px] text-[#6F6961] tracking-wider uppercase mt-0.5">
                  {BRAND.secondaryTagline}
                </p>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide text-[#211F1C]">
              {BRAND.category} IN AHMEDABAD, GUJARAT, INDIA.
            </h3>

            {/* Official Verified About Statement */}
            <p className="text-lg sm:text-xl text-[#292622] font-light leading-relaxed">
              NEVIX is a digital technology and growth partner helping
              businesses build their digital presence, improve visibility,
              automate processes and create better customer experiences.
            </p>

            {/* Official Connect & Social Links */}
            <div className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#DDD6CB] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#211F1C] hover:text-[#C97A67] transition-colors"
                >
                  <Icon icon="lucide:instagram" className="size-4 text-[#C97A67]" />
                  <span>{BRAND.instagramHandle}</span>
                </a>
              </div>
              <a
                href="/contact"
                onClick={(e) => handleNav(e, "/contact")}
                className="px-5 py-3 rounded-full text-xs font-bold tracking-[0.18em] uppercase nevix-warm-button inline-flex items-center gap-2 self-start sm:self-center"
              >
                <span>CONNECT WITH NEVIX</span>
                <Icon icon="lucide:arrow-up-right" className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl nevix-card-surface">
              <Icon icon="lucide:cpu" className="size-6 text-[#C97A67] mb-4" />
              <h4 className="text-lg font-bold uppercase text-[#211F1C] mb-2">
                BUILD
              </h4>
              <p className="text-sm text-[#6F6961] font-light leading-relaxed">
                Website development, custom websites, e-commerce, landing pages,
                portfolio websites, and custom software development.
              </p>
            </div>

            <div className="p-6 rounded-2xl nevix-card-surface">
              <Icon icon="lucide:search-check" className="size-6 text-[#4B7A63] mb-4" />
              <h4 className="text-lg font-bold uppercase text-[#211F1C] mb-2">
                GROW
              </h4>
              <p className="text-sm text-[#6F6961] font-light leading-relaxed">
                SEO, Local SEO, Google Business Profile, digital marketing,
                social media marketing, Google Ads, and lead generation systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl nevix-card-surface">
              <Icon icon="lucide:bot" className="size-6 text-[#746291] mb-4" />
              <h4 className="text-lg font-bold uppercase text-[#211F1C] mb-2">
                AUTOMATE
              </h4>
              <p className="text-sm text-[#6F6961] font-light leading-relaxed">
                AI chatbots, AI agents, business automation, CRM/ERP solutions,
                and WhatsApp integration workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl nevix-card-surface flex flex-col justify-between">
              <div>
                <Icon icon="lucide:shield-check" className="size-6 text-[#9E7B47] mb-4" />
                <h4 className="text-lg font-bold uppercase text-[#211F1C] mb-2">
                  SUPPORT
                </h4>
                <p className="text-sm text-[#6F6961] font-light leading-relaxed">
                  Ongoing website maintenance, security updates, bug fixing,
                  Core Web Vitals, and mobile speed optimization.
                </p>
              </div>
              <a
                href="/services/website-maintenance"
                onClick={(e) => handleNav(e, "/services/website-maintenance")}
                data-cursor="EXPLORE"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C97A67] hover:underline"
              >
                <span>Explore Support Services</span>
                <Icon icon="lucide:arrow-up-right" className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
