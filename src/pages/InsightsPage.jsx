import React, { useEffect, useState } from "react";
import SEOHead from "../components/SEOHead";
import { INSIGHTS_ARTICLES } from "../constants";

const InsightsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(INSIGHTS_ARTICLES[0]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F5EF] pt-28 pb-24">
      <SEOHead
        title={`${selectedArticle.title} | NEVIX Insights`}
        description={selectedArticle.excerpt}
        path="/insights"
        schemaType="Article"
        article={selectedArticle}
        breadcrumbs={[
          { name: "NEVIX Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="py-12 border-b border-[#DDD6CB] mb-14">
          <p className="text-xs font-bold tracking-[0.28em] uppercase text-[#C97A67] mb-3">
            INSIGHTS
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C]">
            DIGITAL ARCHITECTURE BRIEFINGS.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Selector List */}
          <div className="lg:col-span-5 space-y-4">
            {INSIGHTS_ARTICLES.map((art) => {
              const isSelected = selectedArticle.slug === art.slug;
              return (
                <button
                  key={art.slug}
                  type="button"
                  onClick={() => setSelectedArticle(art)}
                  data-cursor="OPEN"
                  className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#FFFDF8] border-[#C97A67] shadow-[0_14px_35px_rgba(201,122,103,0.14)]"
                      : "bg-[#FFFDF8]/75 border-[#DDD6CB] hover:border-[#E7A99A]"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#C97A67] mb-2">
                    <span>{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#211F1C] mb-2">
                    {art.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#6F6961] font-light">
                    {art.excerpt}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Article Reader */}
          <article className="lg:col-span-7 p-8 sm:p-12 rounded-3xl nevix-card-surface">
            <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#C97A67] uppercase tracking-widest mb-4">
              <span>{selectedArticle.category}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#211F1C] mb-8 leading-tight">
              {selectedArticle.title}
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-[#292622] font-light leading-relaxed">
              {selectedArticle.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default InsightsPage;
