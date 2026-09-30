import React, { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import SEOHead from "../components/SEOHead";
import MagneticButton from "../components/MagneticButton";
import { BRAND, SEO_PAGES, SERVICE_CATEGORIES, INDUSTRIES } from "../constants";

const SeoLandingPage = ({ path, onNavigate }) => {
  const pageData = SEO_PAGES[path];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [path]);

  const handleNav = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  if (!pageData) return null;

  const breadcrumbs = [
    { name: "NEVIX Home", path: "/" },
    {
      name:
        pageData.type === "service"
          ? "Services"
          : pageData.type === "location"
          ? "Locations"
          : "Industries",
      path:
        pageData.type === "service"
          ? "/services/website-development"
          : pageData.type === "location"
          ? "/locations/ahmedabad"
          : "/industries/jewellery",
    },
    { name: pageData.h1, path },
  ];

  // Contextual WhatsApp message based on page path
  const getWhatsappHref = () => {
    if (path.includes("seo") || path.includes("google-business")) {
      return BRAND.whatsappMessages.seo;
    }
    if (
      path.includes("ai") ||
      path.includes("automation") ||
      path.includes("crm") ||
      path.includes("erp")
    ) {
      return BRAND.whatsappMessages.automation;
    }
    return BRAND.whatsappMessages.website;
  };

  const relatedLinks =
    pageData.relatedServices && pageData.relatedServices.length > 0
      ? pageData.relatedServices
      : SERVICE_CATEGORIES.flatMap((c) => c.services).slice(0, 6);

  return (
    <main className="min-h-screen bg-[#F8F5EF] pt-28">
      <SEOHead
        title={pageData.title}
        description={pageData.metaDescription}
        path={path}
        schemaType={pageData.type === "location" ? "LocalBusiness" : "Service"}
        serviceName={pageData.h1}
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 border-b border-[#DDD6CB] overflow-hidden nevix-grid-bg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-65"
          style={{ backgroundColor: pageData.pastel || "#F3CFC2" }}
        />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Clean Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#6F6961] mb-8"
          >
            <a
              href="/"
              onClick={(e) => handleNav(e, "/")}
              className="hover:text-[#C97A67] transition-colors"
            >
              NEVIX
            </a>
            <span>/</span>
            <span className="font-bold" style={{ color: pageData.accent }}>
              {pageData.h1}
            </span>
          </nav>

          <div className="max-w-5xl">
            {/* Exact Required SEO H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.96] mb-8">
              {pageData.h1}
            </h1>

            <p className="text-lg sm:text-2xl text-[#292622] font-light leading-relaxed max-w-3xl mb-10">
              {pageData.lead}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#project-inquiry-form"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("project-inquiry-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                cursorText="OPEN"
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.2em] uppercase nevix-warm-button transition-all gap-2"
              >
                <span>START YOUR PROJECT</span>
                <Icon icon="lucide:arrow-up-right" className="size-4" />
              </MagneticButton>

              <a
                href={getWhatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="OPEN"
                className="px-7 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.18em] uppercase border border-[#DDD6CB] bg-[#FFFDF8] text-[#211F1C] hover:border-[#E7A99A] transition-colors inline-flex items-center gap-2"
              >
                <span>WHATSAPP NEVIX</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Strategic Shift Section */}
      <section className="py-20 bg-[#EEE8DD]/65 border-b border-[#DDD6CB]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#211F1C] leading-tight">
              {pageData.problemHeadline}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-[#6F6961] font-light leading-relaxed p-8 rounded-3xl nevix-card-surface">
              {pageData.problemText}
            </p>
          </div>
        </div>
      </section>

      {/* Core Deliverables Grid */}
      <section className="py-24 bg-[#F8F5EF] border-b border-[#DDD6CB]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#211F1C]">
              WHAT WE PROVIDE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.deliverables.map((item, idx) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl nevix-card-surface hover:border-[#E7A99A] transition-all flex flex-col justify-between"
              >
                <div>
                  <span
                    className="text-xs font-bold tracking-widest block mb-4"
                    style={{ color: pageData.accent }}
                  >
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-[#211F1C] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#6F6961] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Execution Methodology */}
      <section className="py-24 bg-[#EEE8DD]/65 border-b border-[#DDD6CB]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#211F1C]">
              HOW WE WORK.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.process.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-2xl nevix-card-surface"
              >
                <span
                  className="text-3xl font-black block mb-4"
                  style={{ color: pageData.accent }}
                >
                  {step.step}
                </span>
                <h3 className="text-lg font-bold uppercase text-[#211F1C] mb-2">
                  {step.name}
                </h3>
                <p className="text-sm text-[#6F6961] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs & Strong Internal Linking */}
      <section className="py-24 bg-[#F8F5EF]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#211F1C] mb-6">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
            <div className="space-y-4">
              {pageData.faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-2xl nevix-card-surface"
                >
                  <h3 className="text-lg font-bold text-[#211F1C] mb-2">{faq.q}</h3>
                  <p className="text-sm sm:text-base text-[#6F6961] font-light leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Ecosystem Links for Internal SEO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl nevix-card-surface">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#C97A67] mb-4">
                RELATED NEVIX SERVICES
              </p>
              <div className="space-y-2.5">
                {relatedLinks.map((srv) => (
                  <a
                    key={srv.slug + srv.title}
                    href={srv.slug}
                    onClick={(e) => handleNav(e, srv.slug)}
                    className="flex items-center justify-between py-2.5 border-b border-[#DDD6CB] text-sm text-[#292622] hover:text-[#C97A67] transition-colors font-medium"
                  >
                    <span>{srv.title}</span>
                    <Icon icon="lucide:arrow-up-right" className="size-4 text-[#C97A67]" />
                  </a>
                ))}
              </div>

              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#4B7A63] mt-8 mb-3">
                INDUSTRIES WE WORK WITH
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {INDUSTRIES.slice(0, 7).map((ind) => (
                  <a
                    key={ind.slug}
                    href={ind.hasDedicatedPage ? ind.slug : "/#industries"}
                    onClick={(e) =>
                      handleNav(e, ind.hasDedicatedPage ? ind.slug : "/#industries")
                    }
                    className="text-xs font-medium text-[#292622] hover:text-[#C97A67] underline underline-offset-4 transition-colors"
                  >
                    {ind.name}
                  </a>
                ))}
              </div>
            </div>

            {path === "/locations/ahmedabad" && (
              <div className="p-8 rounded-3xl nevix-card-surface">
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C97A67] mb-3">
                  AHMEDABAD BUSINESS AREAS WE SERVE
                </h3>
                <p className="text-xs sm:text-sm text-[#6F6961] font-light leading-relaxed">
                  Bopal • South Bopal • Satellite • Bodakdev • Vastrapur • Prahlad Nagar • SG Highway • Thaltej • Sola • Science City • Gota • Chandkheda • Navrangpura • Naranpura • CG Road • Ashram Road • Maninagar • Vejalpur • Shilaj • Memnagar • Paldi • Ellisbridge • Ambawadi
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeoLandingPage;
