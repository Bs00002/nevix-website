import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { PROJECTS } from "../constants";

const CASE_STUDY_STAGES = [
  { key: "challenge", num: "01", label: "CHALLENGE" },
  { key: "strategy", num: "02", label: "STRATEGY" },
  { key: "design", num: "03", label: "DESIGN" },
  { key: "development", num: "04", label: "DEVELOPMENT" },
  { key: "seoMarketing", num: "05", label: "SEO / MARKETING" },
  { key: "result", num: "06", label: "RESULT" },
];

const CaseStudiesSection = ({ onNavigate }) => {
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(0);
  const activeProject = PROJECTS[selectedProjectIdx] || PROJECTS[0];

  const handleNav = (e, slug) => {
    e.preventDefault();
    if (onNavigate) onNavigate(`/work/${slug}`);
  };

  return (
    <section
      id="case-studies"
      className="relative py-24 sm:py-36 bg-[#EEE8DD]/65 border-t border-[#DDD6CB]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-[#C97A67] font-bold mb-3">
              PROJECT BREAKDOWN
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#211F1C] leading-[0.95]">
              WHAT NEVIX
              <br />
              <span className="text-[#C97A67]">BUILT.</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[#6F6961] max-w-md font-light">
            Explore the project scope, industry context, and digital solutions
            delivered across our client engagements.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-[#DDD6CB]">
          {PROJECTS.map((proj, idx) => {
            const isSelected = selectedProjectIdx === idx;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setSelectedProjectIdx(idx)}
                data-cursor="OPEN"
                className={`px-4 py-2.5 rounded-full text-xs tracking-[0.16em] uppercase transition-all cursor-pointer ${
                  isSelected
                    ? "nevix-warm-button font-bold"
                    : "bg-[#FFFDF8] text-[#6F6961] border border-[#DDD6CB] hover:border-[#E7A99A] hover:text-[#292622]"
                }`}
              >
                {proj.name}
              </button>
            );
          })}
        </div>

        {/* Active Project 6-Stage Breakdown */}
        <div className="rounded-3xl border border-[#DDD6CB] bg-[#FFFDF8] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(41,38,34,0.06)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-10 border-b border-[#DDD6CB]">
            <div>
              <span
                className="text-xs font-bold tracking-[0.22em] uppercase block mb-2"
                style={{ color: activeProject.accent }}
              >
                {activeProject.category} • {activeProject.location}
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#211F1C]">
                {activeProject.name}
              </h3>
            </div>
            <a
              href={`/work/${activeProject.slug}`}
              onClick={(e) => handleNav(e, activeProject.slug)}
              data-cursor="VIEW"
              className="px-6 py-3.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase nevix-warm-button transition-all inline-flex items-center gap-2 self-start md:self-auto"
            >
              <span>VIEW PROJECT DETAILS</span>
              <Icon icon="lucide:arrow-up-right" className="size-4" />
            </a>
          </div>

          {/* 01 CHALLENGE -> 06 RESULT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDY_STAGES.map((stage) => (
              <div
                key={stage.key}
                className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#DDD6CB] hover:border-[#E7A99A] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DDD6CB]">
                    <span
                      className="text-sm font-bold"
                      style={{ color: activeProject.accent }}
                    >
                      {stage.num}
                    </span>
                    <span className="text-xs tracking-[0.2em] uppercase text-[#292622] font-bold">
                      {stage.label}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#6F6961] font-light leading-relaxed">
                    {activeProject.caseStudy[stage.key]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
