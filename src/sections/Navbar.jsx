import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";
import { BRAND, NAV_LINKS } from "../constants";
import MagneticButton from "../components/MagneticButton";

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const mobileItemsRef = useRef([]);
  const mobileFooterRef = useRef(null);
  const menuTl = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (!mobileMenuRef.current) return;
    gsap.set(mobileMenuRef.current, { autoAlpha: 0, clipPath: "inset(0 0 100% 0)" });
    gsap.set(mobileItemsRef.current, { y: 40, autoAlpha: 0 });
    gsap.set(mobileFooterRef.current, { y: 20, autoAlpha: 0 });

    menuTl.current = gsap
      .timeline({ paused: true })
      .to(mobileMenuRef.current, {
        autoAlpha: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.55,
        ease: "power4.inOut",
      })
      .to(
        mobileItemsRef.current,
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.05,
          duration: 0.42,
          ease: "power3.out",
        },
        "-=0.2"
      )
      .to(
        mobileFooterRef.current,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.25"
      );
  }, []);

  useEffect(() => {
    if (!menuTl.current) return;
    if (mobileMenuOpen) {
      menuTl.current.play();
      document.body.style.overflow = "hidden";
    } else {
      menuTl.current.reverse();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2.5 bg-[#F8F5EF]/95 backdrop-blur-xl border-b border-[#DDD6CB] shadow-[0_10px_30px_rgba(41,38,34,0.06)]"
            : "py-4 sm:py-5 bg-transparent border-b border-[#DDD6CB]/50"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* Official NEVIX Brand Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            data-cursor="OPEN"
            aria-label="NEVIX Home"
            className="group flex items-center gap-3"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border border-[#DDD6CB] bg-[#FFFDF8] overflow-hidden group-hover:border-[#E7A99A] transition-colors duration-300 shadow-xs flex-shrink-0">
              <img
                src={BRAND.logo}
                alt="NEVIX Official Brand Logo — BUILD • AUTOMATE • GROW"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-[0.22em] text-[#211F1C] leading-none">
                {BRAND.name}
              </span>
              <span className="text-[9px] tracking-[0.24em] text-[#6F6961] uppercase mt-0.5">
                {BRAND.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="px-2 py-2 text-xs font-medium tracking-[0.2em] uppercase text-[#292622] hover:text-[#C97A67] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5">
            <a
              href={BRAND.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold tracking-[0.16em] uppercase bg-[#DCE9E2] border border-[#4B7A63]/50 text-[#211F1C] hover:bg-[#cbe0d4] transition-all shadow-xs"
              aria-label="Direct WhatsApp Contact"
            >
              <Icon icon="lucide:message-circle" className="size-4 text-[#4B7A63]" />
              <span>WHATSAPP</span>
            </a>

            <MagneticButton
              href="/#contact"
              onClick={(e) => handleLinkClick(e, "/#contact")}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-xs font-bold tracking-[0.18em] uppercase nevix-warm-button transition-all"
            >
              START YOUR PROJECT
            </MagneticButton>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden relative z-50 w-11 h-11 rounded-full border border-[#DDD6CB] bg-[#FFFDF8] flex flex-col items-center justify-center gap-1.5 cursor-pointer hover:border-[#E7A99A] transition-colors"
            >
              <span
                className={`block w-5 h-0.5 bg-[#292622] transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#292622] transition-transform duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu */}
      <div
        ref={mobileMenuRef}
        aria-hidden={!mobileMenuOpen}
        className="fixed inset-0 z-40 bg-[#F8F5EF]/98 backdrop-blur-2xl flex flex-col justify-between px-6 pt-24 pb-24 overflow-y-auto lg:hidden"
      >
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#DDD6CB]">
            <img
              src={BRAND.logo}
              alt="NEVIX Logo"
              className="w-10 h-10 object-contain rounded-lg border border-[#DDD6CB] bg-[#FFFDF8]"
            />
            <div>
              <p className="text-[11px] font-mono tracking-[0.22em] text-[#C97A67] font-bold uppercase">
                {BRAND.name} — {BRAND.tagline}
              </p>
              <p className="text-[10px] font-mono tracking-[0.16em] text-[#6F6961] uppercase">
                {BRAND.secondaryTagline}
              </p>
            </div>
          </div>

          {NAV_LINKS.map((item, idx) => (
            <div
              key={item.label}
              ref={(el) => (mobileItemsRef.current[idx] = el)}
              className="border-b border-[#DDD6CB] pb-2.5"
            >
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex items-center justify-between text-2xl sm:text-3xl font-light tracking-wider uppercase text-[#211F1C] hover:text-[#C97A67] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#6F6961]">
                  0{idx + 1}
                </span>
              </a>
            </div>
          ))}
        </div>

        <div
          ref={mobileFooterRef}
          className="mt-6 pt-5 border-t border-[#DDD6CB] flex flex-col gap-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-[#6F6961] uppercase tracking-widest mb-1">
                Location &amp; Socials
              </p>
              <p className="text-[#292622] font-medium">
                {BRAND.location}
              </p>
              <div className="flex items-center gap-3 mt-1.5">
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C97A67] font-bold hover:underline"
                >
                  Instagram ({BRAND.instagramHandle})
                </a>
              </div>
            </div>
            <div>
              <p className="text-[#6F6961] uppercase tracking-widest mb-1">
                Direct Contact
              </p>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-[#292622] tracking-wider block hover:text-[#C97A67]"
              >
                {BRAND.email}
              </a>
              <a
                href={`tel:${BRAND.phoneRaw}`}
                className="text-[#C97A67] font-bold tracking-wider block mt-0.5"
              >
                {BRAND.phone}
              </a>
            </div>
          </div>

          <a
            href="/#contact"
            onClick={(e) => handleLinkClick(e, "/#contact")}
            className="w-full py-4 rounded-full text-center text-xs font-bold tracking-[0.22em] uppercase nevix-warm-button"
          >
            START YOUR PROJECT →
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
