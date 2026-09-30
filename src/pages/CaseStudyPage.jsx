import React, { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import SEOHead from "../components/SEOHead";
import { PROJECTS } from "../constants";

const STAGES = [
  { key: "challenge", num: "01", title: "CHALLENGE" },
  { key: "strategy", num: "02", title: "STRATEGY" },
  { key: "design", num: "03", title: "DESIGN" },
  { key: "development", num: "04", title: "DEVELOPMENT" },
  { key: "seoMarketing", num: "05", title: "SEO / MARKETING" },
  { key: "result", num: "06", title: "RESULT" },
];

const CaseStudyPage = ({ slug, onNavigate }) => {
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex] || PROJECTS[0];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const handleNav = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  return (
    <main className="min-h-screen bg-[#F8F5EF] pt-28">
      <SEOHead
        title={`${project.name} Case Study | ${project.category} Digital System | NEVIX`}
        description={project.summary}
        path={`/work/${project.slug}`}
        breadcrumbs={[
          { name: "NEVIX Home", path: "/" },
          { name: "Selected Work", path: "/#work" },
          { name: project.name, path: `/work/${project.slug}` },
        ]}
      />

      {/* Case Study Hero */}
      <section
        className="relative py-20 sm:py-28 border-b border-[#DDD6CB] overflow-hidden"
        style={{ background: project.bgGradient }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <a
            href="/#work"
            onClick={(e) => handleNav(e, "/#work")}
            data-cursor="OPEN"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#6F6961] hover:text-[#C97A67] mb-8"
          >
            <Icon icon="lucide:arrow-left" className="size-4" />
            <span>BACK TO SELECTED WORK</span>
          </a>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="text-xs font-bold tracking-[0.24em] uppercase"
              style={{
                color: project.accent,
              }}
            >
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#6F6961]">
              • {project.location} • {project.year}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95] mb-6">
            {project.name}
          </h1>

          <p className="text-lg sm:text-2xl text-[#292622] font-light leading-relaxed max-w-3xl mb-10">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-[#DDD6CB]">
            {project.servicesProvided.map((srv) => (
              <span
                key={srv}
                className="text-xs font-medium uppercase tracking-widest text-[#6F6961]"
              >
                {srv}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Stage Case Study Architecture */}
      <section className="py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="space-y-8">
          {STAGES.map((stage) => (
            <div
              key={stage.key}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 sm:p-12 rounded-3xl nevix-card-surface hover:border-[#E7A99A] transition-all items-start"
            >
              <div className="lg:col-span-4 flex items-center gap-4">
                <span
                  className="text-3xl sm:text-4xl font-black font-mono"
                  style={{ color: project.accent }}
                >
                  {stage.num}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#211F1C]">
                  {stage.title}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base sm:text-xl text-[#6F6961] font-light leading-relaxed">
                  {project.caseStudy[stage.key]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Project Navigation */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#EEE8DD] border border-[#DDD6CB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#6F6961] block mb-2">
              NEXT VERIFIED CASE STUDY
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-[#211F1C]">
              {nextProject.name}
            </h3>
          </div>
          <a
            href={`/work/${nextProject.slug}`}
            onClick={(e) => handleNav(e, `/work/${nextProject.slug}`)}
            data-cursor="VIEW"
            className="px-7 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase nevix-warm-button transition-all inline-flex items-center gap-2"
          >
            <span>VIEW CASE STUDY →</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default CaseStudyPage;
