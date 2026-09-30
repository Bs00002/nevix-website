import React from "react";
import SEOHead from "../components/SEOHead";

const NotFoundPage = ({ onNavigate }) => {
  const handleNav = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  return (
    <main className="min-h-screen bg-[#F8F5EF] flex flex-col items-center justify-center px-4 text-center nevix-grid-bg">
      <SEOHead
        title="404 — Route Not Found | NEVIX Digital Systems"
        description="The requested page could not be found in the NEVIX digital ecosystem."
        path="/404"
      />
      <p className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#C97A67] mb-4">
        SYSTEM STATUS // 404 ROUTE NOT FOUND
      </p>
      <h1 className="text-6xl sm:text-8xl font-black uppercase text-[#211F1C] mb-6">
        404
      </h1>
      <p className="text-base sm:text-xl text-[#6F6961] max-w-md font-light mb-8">
        This node does not exist or has been relocated within the NEVIX
        architecture.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="/"
          onClick={(e) => handleNav(e, "/")}
          data-cursor="OPEN"
          className="px-7 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase nevix-warm-button transition-all"
        >
          RETURN TO NEVIX CORE →
        </a>
        <a
          href="/services/website-development"
          onClick={(e) => handleNav(e, "/services/website-development")}
          data-cursor="EXPLORE"
          className="px-7 py-4 rounded-full text-xs font-mono tracking-[0.18em] uppercase border border-[#DDD6CB] bg-[#FFFDF8] text-[#292622] hover:border-[#E7A99A] transition-colors"
        >
          EXPLORE SERVICES
        </a>
      </div>
    </main>
  );
};

export default NotFoundPage;
