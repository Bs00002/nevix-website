import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Marquee from "../components/Marquee";
import { BRAND } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const IntroSection = () => {
  const sectionRef = useRef(null);
  const headline1Ref = useRef(null);
  const headline2Ref = useRef(null);
  const explainRef = useRef(null);

  const marqueeItems = [
    "BUILD",
    "AUTOMATE",
    "GROW",
    "ONE PARTNER. ALL DIGITAL SOLUTIONS.",
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headline1Ref.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        headline2Ref.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0.2 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          opacity: 1,
          duration: 1.25,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headline2Ref.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        explainRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: explainRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="relative py-24 sm:py-36 bg-[#F8F5EF] border-t border-[#DDD6CB] overflow-hidden"
    >
      {/* Velocity Marquee Ribbon */}
      <div className="mb-20 border-y border-[#DDD6CB] bg-[#EEE8DD]">
        <Marquee
          items={marqueeItems}
          className="text-[#292622] bg-transparent"
          icon="mdi:star-four-points"
          iconClassName="text-[#C97A67]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* First Headline */}
        <div ref={headline1Ref}>
          <p className="text-2xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#6F6961] uppercase">
            MORE THAN A WEBSITE.
          </p>
        </div>

        {/* Second Animated Headline */}
        <div ref={headline2Ref} className="mt-4 sm:mt-6">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-black uppercase leading-[0.96] tracking-tight text-[#211F1C]">
            A DIGITAL SYSTEM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C97A67] via-[#9E7B47] to-[#746291]">
              BUILT FOR GROWTH.
            </span>
          </h2>
        </div>

        {/* Explanation Grid */}
        <div
          ref={explainRef}
          className="mt-12 sm:mt-16 pt-10 border-t border-[#DDD6CB] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          <div className="lg:col-span-4 text-xs tracking-[0.2em] uppercase text-[#6F6961] space-y-2">
            <p className="font-bold text-[#211F1C]">{BRAND.name}</p>
            <p>{BRAND.secondaryTagline}</p>
            <p>{BRAND.location}</p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-[#292622]">
              NEVIX combines{" "}
              <span className="text-[#211F1C] font-normal underline decoration-[#E7A99A] underline-offset-8">
                technology
              </span>
              ,{" "}
              <span className="text-[#211F1C] font-normal underline decoration-[#E6D5B8] underline-offset-8">
                design
              </span>
              ,{" "}
              <span className="text-[#211F1C] font-normal underline decoration-[#DCE9E2] underline-offset-8">
                marketing
              </span>{" "}
              and{" "}
              <span className="text-[#211F1C] font-normal underline decoration-[#DCD3EA] underline-offset-8">
                automation
              </span>{" "}
              to create digital systems that help businesses become visible,
              efficient and scalable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
