import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react/dist/iconify.js";
import MagneticButton from "../components/MagneticButton";
import { BRAND, PRICING_DATA } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const PricingSection = ({ onNavigate, isStandalonePage = false }) => {
  const sectionRef = useRef(null);
  const promoRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (promoRef.current) {
        gsap.fromTo(
          promoRef.current,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: promoRef.current,
              start: "top 85%",
            },
          }
        );
      }

      cardsRef.current.forEach((el, idx) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            delay: idx * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
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

  const { promoOffer, plans } = PRICING_DATA;

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className={`relative ${
        isStandalonePage ? "pt-32 pb-24" : "py-24 sm:py-36"
      } bg-[#EEE8DD]/65 border-t border-[#DDD6CB] overflow-hidden`}
    >
      {/* Ambient Warm Champagne & Peach Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-10 w-[480px] h-[480px] rounded-full bg-[#F3CFC2]/55 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 w-[420px] h-[420px] rounded-full bg-[#E6D5B8]/55 blur-[120px]"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-[#C97A67] font-bold mb-3">
              PRICING
            </p>
            {isStandalonePage ? (
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95]">
                Simple Starting Prices. Custom Solutions.
              </h1>
            ) : (
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95]">
                SIMPLE STARTING PRICES.
                <br />
                <span className="text-[#C97A67]">CUSTOM SOLUTIONS.</span>
              </h2>
            )}
          </div>
          <p className="text-base sm:text-lg text-[#6F6961] max-w-xl font-light leading-relaxed">
            {promoOffer.disclaimerPrimary}
          </p>
        </div>

        {/* DEDICATED ₹2,199 PROMOTIONAL OFFER BANNER */}
        <div
          ref={promoRef}
          className="mb-16 rounded-3xl border border-[#DDD6CB] bg-gradient-to-br from-[#FFFDF8] via-[#F8F5EF] to-[#F3CFC2]/35 p-7 sm:p-12 shadow-[0_25px_65px_rgba(41,38,34,0.07)] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Offer Details */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#211F1C] leading-tight">
                {promoOffer.headline}
              </h3>

              <p className="text-lg sm:text-xl text-[#292622] font-light leading-relaxed">
                {promoOffer.description}
              </p>

              {/* Suitable For List */}
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6F6961] mb-3">
                  SUITABLE FOR:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {promoOffer.suitableFor.map((item) => (
                    <div
                      key={item}
                      className="text-sm text-[#292622] font-light flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C97A67]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#6F6961] font-light pt-2 border-t border-[#DDD6CB]">
                {promoOffer.disclaimerSecondary}
              </p>
            </div>

            {/* Right Price Highlight Box & CTAs */}
            <div className="lg:col-span-5">
              <div className="p-7 sm:p-9 rounded-3xl bg-[#FFFDF8] border border-[#DDD6CB] shadow-[0_18px_45px_rgba(41,38,34,0.06)] text-center space-y-4">
                <p className="text-xs font-bold tracking-[0.26em] uppercase text-[#6F6961]">
                  WEBSITE {promoOffer.priceLabel}
                </p>
                <div className="text-5xl sm:text-7xl font-black tracking-tight text-[#211F1C]">
                  {promoOffer.price}
                </div>
                <p className="text-xs font-bold tracking-[0.24em] uppercase text-[#C97A67]">
                  {promoOffer.billing}
                </p>

                <div className="pt-4 flex flex-col gap-3">
                  <MagneticButton
                    href="/contact"
                    onClick={(e) => handleNav(e, "/contact")}
                    cursorText="OPEN"
                    className="w-full py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] uppercase nevix-warm-button justify-center gap-2"
                  >
                    <span>GET STARTED</span>
                    <Icon icon="lucide:arrow-up-right" className="size-4" />
                  </MagneticButton>

                  <a
                    href={BRAND.whatsappMessages.offer2199}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.18em] uppercase bg-[#F8F5EF] text-[#211F1C] border border-[#DDD6CB] hover:border-[#E7A99A] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>WHATSAPP NEVIX</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 PRICING TIERS: STARTER, BUSINESS, GROWTH, CUSTOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={plan.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-500 hover:-translate-y-2 ${
                plan.featured
                  ? "bg-[#FFFDF8] border-[#C97A67] shadow-[0_22px_50px_rgba(201,122,103,0.12)]"
                  : "bg-[#FFFDF8] border-[#DDD6CB] shadow-[0_14px_35px_rgba(41,38,34,0.05)] hover:border-[#E7A99A]"
              }`}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#211F1C] mb-2">
                  {plan.name}
                </h3>

                <div className="my-5 pb-5 border-b border-[#DDD6CB]">
                  <div
                    className="text-3xl sm:text-4xl font-black tracking-tight"
                    style={{ color: plan.featured ? "#C97A67" : "#211F1C" }}
                  >
                    {plan.price}
                  </div>
                  <p className="text-[11px] tracking-[0.18em] uppercase text-[#6F6961] mt-1">
                    {plan.billing}
                  </p>
                </div>

                <p className="text-sm text-[#6F6961] font-light leading-relaxed mb-6">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292622] font-light"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: plan.accent }}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-[#DDD6CB]">
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, "/contact")}
                  data-cursor="OPEN"
                  className={`w-full py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 ${
                    plan.featured
                      ? "nevix-warm-button"
                      : "bg-[#EEE8DD] text-[#211F1C] border border-[#DDD6CB] hover:bg-[#E6D5B8]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <Icon icon="lucide:arrow-up-right" className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
