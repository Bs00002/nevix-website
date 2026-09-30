import React, { Suspense, lazy, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Icon } from "@iconify/react/dist/iconify.js";
import MagneticButton from "../components/MagneticButton";
import Marquee from "../components/Marquee";
import { BRAND, PROJECTS } from "../constants";

const NevixCore3D = lazy(() => import("../components/NevixCore3D"));

const SERVICE_OPTIONS = [
  "Website Development",
  "E-commerce Development",
  "Website Redesign",
  "SEO",
  "Local SEO",
  "Google Business Profile",
  "Digital Marketing",
  "Google Ads",
  "Social Media Marketing",
  "AI Chatbot",
  "AI Agent",
  "Business Automation",
  "CRM / ERP",
  "Custom Software",
  "Website Maintenance",
  "Other",
];

const Contact = ({ onNavigate, isStandalonePage = false }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "Website Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNav = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  const marqueeItems = [
    "NEVIX",
    "BUILD • AUTOMATE • GROW",
    "ONE PARTNER. ALL DIGITAL SOLUTIONS.",
    "AHMEDABAD • GUJARAT • INDIA",
  ];

  // Build contextual WhatsApp URL from selected service
  const getContextualWhatsappUrl = () => {
    const srv = formState.service.toLowerCase();
    if (srv.includes("seo") || srv.includes("google business")) {
      return BRAND.whatsappMessages.seo;
    }
    if (
      srv.includes("ai") ||
      srv.includes("automation") ||
      srv.includes("crm") ||
      srv.includes("software")
    ) {
      return BRAND.whatsappMessages.automation;
    }
    return BRAND.whatsappMessages.website;
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#EEE8DD] border-t border-[#DDD6CB] overflow-hidden pb-16 sm:pb-0"
    >
      {/* SECTION 11 — FINAL CTA WITH RETURNING 3D NEVIX DIGITAL CORE */}
      <div
        className={`relative min-h-[82vh] flex flex-col items-center justify-center ${
          isStandalonePage ? "pt-32 pb-20" : "py-24 sm:py-32"
        } px-4 sm:px-6 lg:px-10 text-center overflow-hidden nevix-grid-bg`}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(243, 207, 194, 0.55) 0%, rgba(230, 213, 184, 0.38) 45%, #F8F5EF 85%)",
        }}
      >
        {/* Returning 3D NEVIX Digital Core */}
        <div className="absolute inset-0 z-0 opacity-90 pointer-events-auto">
          <Suspense fallback={null}>
            <NevixCore3D activeState={2} isMobile={isMobile} />
          </Suspense>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F8F5EF]/80 via-transparent to-[#EEE8DD]"
        />

        <div className="relative z-10 max-w-5xl mx-auto pointer-events-none">
          {isStandalonePage ? (
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95] mb-8">
              Let&apos;s Build Something That Grows.
            </h1>
          ) : (
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95] mb-8">
              LET&apos;S BUILD
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C97A67] via-[#9E7B47] to-[#746291]">
                SOMETHING THAT GROWS.
              </span>
            </h2>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-2xl sm:text-4xl font-black uppercase tracking-[0.18em] mb-4">
            <span className="text-[#C97A67]">BUILD.</span>
            <span className="text-[#746291]">AUTOMATE.</span>
            <span className="text-[#9E7B47]">GROW.</span>
          </div>

          <p className="text-xs sm:text-sm tracking-[0.28em] uppercase text-[#6F6961] mb-9">
            {BRAND.secondaryTagline}
          </p>

          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="#project-inquiry-form"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("project-inquiry-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              cursorText="OPEN"
              className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.22em] uppercase nevix-warm-button transition-all gap-2"
            >
              <span>START YOUR PROJECT</span>
              <Icon icon="lucide:arrow-up-right" className="size-4" />
            </MagneticButton>

            <a
              href={BRAND.whatsappMessages.website}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.18em] uppercase border border-[#DDD6CB] bg-[#FFFDF8]/95 text-[#292622] hover:border-[#E7A99A] hover:text-[#C97A67] transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <span>WHATSAPP NEVIX</span>
            </a>

            <a
              href={`mailto:${BRAND.email}`}
              data-cursor="OPEN"
              className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.18em] uppercase border border-[#DDD6CB] bg-[#FFFDF8]/95 text-[#292622] hover:border-[#E7A99A] hover:text-[#C97A67] transition-colors inline-flex items-center gap-2 shadow-xs"
            >
              <span>EMAIL NEVIX</span>
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Project Inquiry & Direct Contact System */}
      <div
        id="project-inquiry-form"
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-20 border-t border-[#DDD6CB] bg-[#F8F5EF]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Official Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={BRAND.logo}
                alt="NEVIX Official Logo"
                className="w-16 h-16 object-contain rounded-2xl border border-[#DDD6CB] bg-[#FFFDF8] p-1 shadow-xs"
              />
              <div>
                <p className="text-2xl font-black tracking-[0.22em] text-[#211F1C]">
                  {BRAND.name}
                </p>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C97A67]">
                  {BRAND.tagline}
                </p>
                <p className="text-[11px] tracking-[0.14em] uppercase text-[#6F6961]">
                  {BRAND.secondaryTagline}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#211F1C]">
                CONTACT {BRAND.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#6F6961] font-light leading-relaxed">
                Discuss website development (starting from ₹2,199), SEO, Local
                SEO, digital marketing, e-commerce, AI automation, or custom
                software with our team in Ahmedabad.
              </p>
            </div>

            <div className="space-y-3.5">
              {/* Phone / WhatsApp */}
              <div className="p-5 rounded-2xl nevix-card-surface">
                <p className="text-[11px] uppercase tracking-widest text-[#6F6961] mb-1">
                  Phone / WhatsApp
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`tel:${BRAND.phoneRaw}`}
                    data-cursor="OPEN"
                    className="text-lg sm:text-xl font-bold text-[#211F1C] hover:text-[#C97A67] transition-colors"
                  >
                    {BRAND.phone}
                  </a>
                  <a
                    href={BRAND.whatsappMessages.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="OPEN"
                    className="text-xs font-bold uppercase tracking-wider text-[#4B7A63] hover:underline"
                  >
                    WHATSAPP NEVIX →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl nevix-card-surface">
                <p className="text-[11px] uppercase tracking-widest text-[#6F6961] mb-1">
                  Official Email
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${BRAND.email}`}
                    data-cursor="OPEN"
                    className="text-lg sm:text-xl font-bold text-[#211F1C] hover:text-[#C97A67] transition-colors break-all"
                  >
                    {BRAND.email}
                  </a>
                  <a
                    href={`mailto:${BRAND.email}`}
                    data-cursor="OPEN"
                    className="text-xs font-bold uppercase tracking-wider text-[#C97A67] hover:underline"
                  >
                    EMAIL NEVIX →
                  </a>
                </div>
              </div>

              {/* Location & Social Media */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-5 rounded-2xl nevix-card-surface">
                  <p className="text-[11px] uppercase tracking-widest text-[#6F6961] mb-1">
                    Primary Location
                  </p>
                  <p className="text-base font-bold text-[#211F1C]">
                    {BRAND.location}
                  </p>
                </div>

                <div className="p-5 rounded-2xl nevix-card-surface">
                  <p className="text-[11px] uppercase tracking-widest text-[#6F6961] mb-1.5">
                    Instagram
                  </p>
                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-bold text-[#211F1C] hover:text-[#C97A67] transition-colors"
                  >
                    <Icon icon="lucide:instagram" className="size-4 text-[#C97A67]" />
                    <span>{BRAND.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Light Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#FFFDF8] border border-[#DDD6CB] shadow-[0_20px_50px_rgba(41,38,34,0.06)]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#DCE9E2] border border-[#4B7A63]/40 flex items-center justify-center mx-auto text-[#4B7A63]">
                    <Icon icon="lucide:check" className="size-8" />
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black uppercase text-[#211F1C]">
                    CONSULTATION REQUEST RECEIVED
                  </h4>
                  <p className="text-sm sm:text-base text-[#6F6961] max-w-md mx-auto font-light">
                    Thank you, {formState.name || "Partner"}. We have received
                    your request for{" "}
                    <span className="text-[#C97A67] font-medium">
                      {formState.service}
                    </span>
                    . You can also connect with us immediately on WhatsApp at{" "}
                    <span className="font-medium text-[#211F1C]">
                      {BRAND.phone}
                    </span>
                    .
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={getContextualWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase nevix-warm-button"
                    >
                      WHATSAPP NEVIX NOW
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3.5 rounded-full text-xs uppercase border border-[#DDD6CB] text-[#292622] cursor-pointer hover:bg-[#EEE8DD]"
                    >
                      SUBMIT ANOTHER ENQUIRY
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="nevix-name"
                        className="block text-xs uppercase tracking-wider text-[#292622] font-medium mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="nevix-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#D8D0C5] text-[#292622] placeholder-[#8B8379] text-sm focus:border-[#E7A99A] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nevix-company"
                        className="block text-xs uppercase tracking-wider text-[#292622] font-medium mb-2"
                      >
                        Business / Organization
                      </label>
                      <input
                        id="nevix-company"
                        type="text"
                        value={formState.company}
                        onChange={(e) =>
                          setFormState({ ...formState, company: e.target.value })
                        }
                        placeholder="Your business or organization"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#D8D0C5] text-[#292622] placeholder-[#8B8379] text-sm focus:border-[#E7A99A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="nevix-phone"
                        className="block text-xs uppercase tracking-wider text-[#292622] font-medium mb-2"
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="nevix-phone"
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        placeholder="+91"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#D8D0C5] text-[#292622] placeholder-[#8B8379] text-sm focus:border-[#E7A99A] transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nevix-email"
                        className="block text-xs uppercase tracking-wider text-[#292622] font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="nevix-email"
                        type="email"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="you@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#D8D0C5] text-[#292622] placeholder-[#8B8379] text-sm focus:border-[#E7A99A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="nevix-service"
                      className="block text-xs uppercase tracking-wider text-[#292622] font-medium mb-2"
                    >
                      Service Required *
                    </label>
                    <select
                      id="nevix-service"
                      required
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#D8D0C5] text-[#292622] text-sm focus:border-[#E7A99A] transition-colors"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="nevix-message"
                      className="block text-xs uppercase tracking-wider text-[#292622] font-medium mb-2"
                    >
                      Project Goals / Requirements
                    </label>
                    <textarea
                      id="nevix-message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell us about your business goals, pages, or requirements..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FFFDF8] border border-[#D8D0C5] text-[#292622] placeholder-[#8B8379] text-sm focus:border-[#E7A99A] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-project-inquiry"
                    data-cursor="OPEN"
                    className="w-full py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.22em] uppercase nevix-warm-button transition-all cursor-pointer"
                  >
                    GET YOUR FREE CONSULTATION →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Crawlable SEO Sitemap Footer */}
      <div className="bg-[#E8E1D6] border-t border-[#DDD6CB]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 text-xs">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND.logo}
                alt="NEVIX Logo"
                className="w-12 h-12 object-contain rounded-xl border border-[#DDD6CB] bg-[#FFFDF8]"
              />
              <div>
                <span className="text-xl font-black tracking-[0.22em] text-[#211F1C] block">
                  {BRAND.name}
                </span>
                <span className="text-[10px] font-bold text-[#C97A67] tracking-[0.18em] block">
                  {BRAND.tagline}
                </span>
              </div>
            </div>

            <p className="font-bold text-[#211F1C] tracking-[0.14em] uppercase">
              {BRAND.secondaryTagline}
            </p>

            <p className="text-[#6F6961] font-light leading-relaxed">
              NEVIX is a digital technology and growth partner helping
              businesses build their digital presence, improve visibility,
              automate processes and create better customer experiences.
            </p>

            <div className="pt-2 space-y-1.5 text-[#292622]">
              <p>
                <span className="text-[#6F6961]">Location:</span>{" "}
                {BRAND.location}
              </p>
              <p>
                <span className="text-[#6F6961]">Email:</span>{" "}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-[#C97A67] underline"
                >
                  {BRAND.email}
                </a>
              </p>
              <p>
                <span className="text-[#6F6961]">Phone / WhatsApp:</span>{" "}
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="hover:text-[#C97A67] font-bold"
                >
                  {BRAND.phone}
                </a>
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="NEVIX on Instagram"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF8] border border-[#DDD6CB] text-[#211F1C] hover:border-[#C97A67] hover:text-[#C97A67] transition-colors font-medium"
                >
                  <Icon icon="lucide:instagram" className="size-3.5 text-[#C97A67]" />
                  <span>{BRAND.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <p className="tracking-[0.2em] uppercase font-bold text-[#211F1C]">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-[#292622]">
              <li>
                <a
                  href="/#services"
                  onClick={(e) => handleNav(e, "/#services")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#work"
                  onClick={(e) => handleNav(e, "/#work")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  onClick={(e) => handleNav(e, "/#pricing")}
                  className="hover:text-[#C97A67] transition-colors font-semibold text-[#C97A67]"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={(e) => handleNav(e, "/#about")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => handleNav(e, "/#contact")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Build & Support Services */}
          <div className="space-y-3">
            <p className="tracking-[0.2em] uppercase font-bold text-[#C97A67]">
              BUILD &amp; SUPPORT
            </p>
            <ul className="space-y-2 text-[#292622]">
              <li>
                <a
                  href="/services/website-development"
                  onClick={(e) => handleNav(e, "/services/website-development")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="/services/website-redesign"
                  onClick={(e) => handleNav(e, "/services/website-redesign")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Custom Website Development
                </a>
              </li>
              <li>
                <a
                  href="/services/ecommerce-development"
                  onClick={(e) => handleNav(e, "/services/ecommerce-development")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  E-commerce Development
                </a>
              </li>
              <li>
                <a
                  href="/services/custom-software"
                  onClick={(e) => handleNav(e, "/services/custom-software")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Custom Software Development
                </a>
              </li>
              <li>
                <a
                  href="/services/website-maintenance"
                  onClick={(e) => handleNav(e, "/services/website-maintenance")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Website Maintenance &amp; Speed
                </a>
              </li>
            </ul>
          </div>

          {/* Grow Services */}
          <div className="space-y-3">
            <p className="tracking-[0.2em] uppercase font-bold text-[#4B7A63]">
              GROW
            </p>
            <ul className="space-y-2 text-[#292622]">
              <li>
                <a
                  href="/services/seo"
                  onClick={(e) => handleNav(e, "/services/seo")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  SEO Services in Ahmedabad
                </a>
              </li>
              <li>
                <a
                  href="/services/local-seo"
                  onClick={(e) => handleNav(e, "/services/local-seo")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Local SEO Services
                </a>
              </li>
              <li>
                <a
                  href="/services/google-business-profile"
                  onClick={(e) =>
                    handleNav(e, "/services/google-business-profile")
                  }
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Google Business Profile
                </a>
              </li>
              <li>
                <a
                  href="/services/digital-marketing"
                  onClick={(e) => handleNav(e, "/services/digital-marketing")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services/social-media-marketing"
                  onClick={(e) =>
                    handleNav(e, "/services/social-media-marketing")
                  }
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a
                  href="/services/google-ads"
                  onClick={(e) => handleNav(e, "/services/google-ads")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Google Ads / PPC
                </a>
              </li>
            </ul>
          </div>

          {/* Automate & Portfolio */}
          <div className="space-y-3">
            <p className="tracking-[0.2em] uppercase font-bold text-[#746291]">
              AUTOMATE &amp; WORK
            </p>
            <ul className="space-y-2 text-[#292622]">
              <li>
                <a
                  href="/services/ai-chatbots"
                  onClick={(e) => handleNav(e, "/services/ai-chatbots")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  AI Chatbots
                </a>
              </li>
              <li>
                <a
                  href="/services/ai-agents"
                  onClick={(e) => handleNav(e, "/services/ai-agents")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  AI Agents
                </a>
              </li>
              <li>
                <a
                  href="/services/business-automation"
                  onClick={(e) => handleNav(e, "/services/business-automation")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  Business &amp; WhatsApp Automation
                </a>
              </li>
              <li>
                <a
                  href="/services/crm-development"
                  onClick={(e) => handleNav(e, "/services/crm-development")}
                  className="hover:text-[#C97A67] transition-colors"
                >
                  CRM / ERP Solutions
                </a>
              </li>
              {PROJECTS.slice(0, 3).map((proj) => (
                <li key={proj.slug}>
                  <a
                    href={`/work/${proj.slug}`}
                    onClick={(e) => handleNav(e, `/work/${proj.slug}`)}
                    className="hover:text-[#C97A67] transition-colors text-[#6F6961]"
                  >
                    {proj.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Marquee & Copyright */}
        <div className="border-t border-[#DDD6CB]">
          <Marquee
            items={marqueeItems}
            className="text-[#292622] bg-[#EEE8DD]"
            icon="mdi:star-four-points"
            iconClassName="text-[#C97A67]"
          />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-6 border-t border-[#DDD6CB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F6961]">
          <span>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. • {BRAND.location}.
          </span>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#292622] hover:text-[#C97A67] font-medium transition-colors"
            >
              <Icon icon="lucide:instagram" className="size-4 text-[#C97A67]" />
              <span>INSTAGRAM ({BRAND.instagramHandle})</span>
            </a>
            <a
              href={BRAND.whatsappMessages.general}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#292622] hover:text-[#4B7A63] font-medium transition-colors"
            >
              <Icon icon="lucide:message-circle" className="size-4 text-[#4B7A63]" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
