import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactLenis from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icon } from "@iconify/react/dist/iconify.js";

import SEOHead from "./components/SEOHead";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import IntroSection from "./sections/IntroSection";
import BuildAutomateGrow from "./sections/BuildAutomateGrow";
import Services from "./sections/Services";
import PricingSection from "./sections/PricingSection";
import WhyNevixSection from "./sections/WhyNevixSection";
import SeoSection from "./sections/SeoSection";
import AiAutomationSection from "./sections/AiAutomationSection";
import Works from "./sections/Works";
import CaseStudiesSection from "./sections/CaseStudiesSection";
import IndustriesSection from "./sections/IndustriesSection";
import About from "./sections/About";
import Contact from "./sections/Contact";

import SeoLandingPage from "./pages/SeoLandingPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import InsightsPage from "./pages/InsightsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BRAND, SEO_PAGES, PROJECTS } from "./constants";

gsap.registerPlugin(ScrollTrigger);

const REDIRECT_MAP = {
  "/services": "/services/website-development",
  "/seo": "/services/seo",
  "/local-seo": "/services/local-seo",
  "/local-seo-ahmedabad": "/services/local-seo",
  "/website-development": "/services/website-development",
  "/ecommerce": "/services/ecommerce-development",
  "/digital-marketing": "/services/digital-marketing",
  "/ai": "/services/ai-chatbots",
  "/automation": "/services/business-automation",
  "/portfolio": "/work",
  "/blog": "/insights",
};

const normalizePath = (rawPath) => {
  if (!rawPath || rawPath === "") return "/";
  const cleaned = rawPath.split("?")[0].replace(/\/+$/, "");
  const normalized = cleaned === "" ? "/" : cleaned;
  return REDIRECT_MAP[normalized] || normalized;
};

const App = () => {
  const [currentPath, setCurrentPath] = useState(() =>
    normalizePath(window.location.pathname)
  );
  const transitionCurtainRef = useRef(null);

  useEffect(() => {
    const raw = window.location.pathname.split("?")[0].replace(/\/+$/, "") || "/";
    if (REDIRECT_MAP[raw]) {
      window.history.replaceState({}, "", REDIRECT_MAP[raw]);
    }

    const onPopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      setTimeout(() => ScrollTrigger.refresh(), 100);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const handleNavigate = useCallback(
    (targetHref) => {
      if (!targetHref) return;

      // Handle hash links like "/#services" or "#contact"
      if (targetHref.startsWith("/#") || targetHref.startsWith("#")) {
        const hashId = targetHref.replace(/^\/?#/, "");
        if (currentPath !== "/") {
          window.history.pushState({}, "", `/#${hashId}`);
          setCurrentPath("/");
          setTimeout(() => {
            const el = document.getElementById(hashId);
            if (el) el.scrollIntoView({ behavior: "smooth" });
            ScrollTrigger.refresh();
          }, 180);
        } else {
          const el = document.getElementById(hashId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      const nextPath = normalizePath(targetHref);
      if (nextPath === currentPath) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Smooth GSAP Page Transition Curtain with Official NEVIX Logo
      if (transitionCurtainRef.current) {
        gsap.fromTo(
          transitionCurtainRef.current,
          { scaleY: 0, transformOrigin: "bottom" },
          {
            scaleY: 1,
            duration: 0.28,
            ease: "power3.inOut",
            onComplete: () => {
              window.history.pushState({}, "", nextPath);
              setCurrentPath(nextPath);
              window.scrollTo({ top: 0, behavior: "instant" });
              setTimeout(() => ScrollTrigger.refresh(), 120);
              gsap.to(transitionCurtainRef.current, {
                scaleY: 0,
                transformOrigin: "top",
                duration: 0.35,
                ease: "power3.inOut",
              });
            },
          }
        );
      } else {
        window.history.pushState({}, "", nextPath);
        setCurrentPath(nextPath);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    },
    [currentPath]
  );

  // Route Resolution
  const renderPage = () => {
    // 1. Homepage (or /work / /solutions section views)
    if (
      currentPath === "/" ||
      currentPath === "/work" ||
      currentPath === "/solutions"
    ) {
      return (
        <main>
          <SEOHead
            title="Digital Marketing & Web Development Company in Ahmedabad | NEVIX"
            description="NEVIX is a digital technology and growth agency in Ahmedabad offering website development, SEO, digital marketing, AI automation, e-commerce, CRM and custom software solutions."
            path={currentPath}
            breadcrumbs={[{ name: "NEVIX Home", path: "/" }]}
          />
          <Hero onNavigate={handleNavigate} />
          <IntroSection />
          <BuildAutomateGrow onNavigate={handleNavigate} />
          <Services onNavigate={handleNavigate} />
          <PricingSection onNavigate={handleNavigate} />
          <WhyNevixSection />
          <SeoSection onNavigate={handleNavigate} />
          <AiAutomationSection onNavigate={handleNavigate} />
          <Works onNavigate={handleNavigate} />
          <CaseStudiesSection onNavigate={handleNavigate} />
          <IndustriesSection onNavigate={handleNavigate} />
          <About onNavigate={handleNavigate} />
        </main>
      );
    }

    // 2. Dedicated /about Route with Exact Required SEO & H1
    if (currentPath === "/about") {
      return (
        <main>
          <SEOHead
            title="About NEVIX | Digital Technology & Growth Partner in Ahmedabad"
            description="Learn about NEVIX, a digital technology and growth partner helping businesses build websites, improve visibility, automate workflows and grow online."
            path="/about"
            schemaType="Organization"
            breadcrumbs={[
              { name: "NEVIX Home", path: "/" },
              { name: "About NEVIX", path: "/about" },
            ]}
          />
          <About onNavigate={handleNavigate} isStandalonePage />
          <WhyNevixSection />
          <IndustriesSection onNavigate={handleNavigate} />
        </main>
      );
    }

    // 3. Dedicated /pricing Route with Exact Required SEO & H1
    if (currentPath === "/pricing") {
      return (
        <main>
          <SEOHead
            title="Website & Digital Services Pricing | NEVIX Ahmedabad"
            description="Explore NEVIX website and digital service options. Business websites start from ₹2,199, with custom pricing based on features and requirements."
            path="/pricing"
            schemaType="Service"
            serviceName="NEVIX Website & Digital Services Pricing"
            breadcrumbs={[
              { name: "NEVIX Home", path: "/" },
              { name: "Pricing", path: "/pricing" },
            ]}
          />
          <PricingSection onNavigate={handleNavigate} isStandalonePage />
          <Services onNavigate={handleNavigate} />
        </main>
      );
    }

    // 4. Dedicated /contact Route with Exact Required SEO, H1 & ContactPage Schema
    if (currentPath === "/contact") {
      return (
        <main>
          <SEOHead
            title="Contact NEVIX | Digital Solutions Company in Ahmedabad"
            description="Contact NEVIX for website development, SEO, digital marketing, AI automation, e-commerce and custom software solutions in Ahmedabad."
            path="/contact"
            schemaType="ContactPage"
            breadcrumbs={[
              { name: "NEVIX Home", path: "/" },
              { name: "Contact NEVIX", path: "/contact" },
            ]}
          />
        </main>
      );
    }

    // 5. Dedicated SEO Pages (/services/*, /locations/ahmedabad, /industries/*)
    if (SEO_PAGES[currentPath]) {
      return (
        <SeoLandingPage path={currentPath} onNavigate={handleNavigate} />
      );
    }

    // 6. Dedicated Case Study Pages (/work/:slug)
    if (currentPath.startsWith("/work/")) {
      const slug = currentPath.replace("/work/", "");
      const exists = PROJECTS.some((p) => p.slug === slug);
      if (exists) {
        return <CaseStudyPage slug={slug} onNavigate={handleNavigate} />;
      }
    }

    // 7. Insights Page (/insights)
    if (currentPath === "/insights") {
      return <InsightsPage onNavigate={handleNavigate} />;
    }

    // 8. 404 Page
    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  return (
    <ReactLenis
      root
      options={{ lerp: 0.09, smoothWheel: true, syncTouch: false }}
      className="relative w-screen min-h-screen overflow-x-hidden bg-[#F8F5EF] text-[#292622]"
    >
      {/* Page Transition / Loading Screen Curtain with Official NEVIX Logo */}
      <div
        ref={transitionCurtainRef}
        aria-hidden="true"
        style={{
          transform: "scaleY(0)",
          background: "linear-gradient(135deg, #F8F5EF 0%, #E6D5B8 50%, #F3CFC2 100%)",
        }}
        className="fixed inset-0 z-[9000] pointer-events-none flex items-center justify-center"
      >
        <div className="flex flex-col items-center gap-3">
          <img
            src={BRAND.logo}
            alt="NEVIX Loading"
            className="w-24 h-24 object-contain rounded-2xl border border-[#DDD6CB] bg-[#FFFDF8] p-2 shadow-lg"
          />
          <span className="text-xs font-mono font-bold tracking-[0.28em] uppercase text-[#211F1C]">
            {BRAND.tagline}
          </span>
        </div>
      </div>

      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {renderPage()}

      <Contact
        onNavigate={handleNavigate}
        isStandalonePage={currentPath === "/contact"}
      />

      {/* Floating Desktop Direct WhatsApp CTA Button */}
      <a
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NEVIX on WhatsApp"
        className="hidden sm:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#DCE9E2] border border-[#4B7A63]/55 text-[#211F1C] text-xs font-bold uppercase tracking-[0.18em] shadow-[0_14px_34px_rgba(41,38,34,0.14)] hover:bg-[#cbe0d4] hover:-translate-y-0.5 transition-all"
      >
        <Icon icon="lucide:message-circle" className="size-4 text-[#4B7A63]" />
        <span>WHATSAPP NEVIX</span>
      </a>

      {/* Sticky Mobile CTA Bar: WHATSAPP & CALL */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#FFFDF8]/95 backdrop-blur-xl border-t border-[#DDD6CB] px-3 py-2.5 grid grid-cols-2 gap-2.5 shadow-[0_-8px_25px_rgba(41,38,34,0.08)]">
        <a
          href={BRAND.whatsappMessages.website}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 rounded-full bg-[#DCE9E2] border border-[#4B7A63]/40 text-[#211F1C] text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2"
        >
          <Icon icon="lucide:message-circle" className="size-4 text-[#4B7A63]" />
          <span>WHATSAPP</span>
        </a>
        <a
          href={`tel:${BRAND.phoneRaw}`}
          className="py-3 rounded-full nevix-warm-button text-xs font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2"
        >
          <Icon icon="lucide:phone" className="size-4" />
          <span>CALL</span>
        </a>
      </div>
    </ReactLenis>
  );
};

export default App;
