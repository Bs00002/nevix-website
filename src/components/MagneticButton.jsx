import React, { useRef } from "react";
import gsap from "gsap";

const MagneticButton = ({
  children,
  className = "",
  cursorText = "OPEN",
  onClick,
  href,
  strength = 0.28,
  ariaLabel,
  type = "button",
}) => {
  const elRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const el = elRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, {
      x: relX * strength,
      y: relY * strength,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    const el = elRef.current;
    if (!el) return;
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  if (href) {
    return (
      <a
        ref={elRef}
        href={href}
        onClick={onClick}
        data-cursor={cursorText}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`inline-flex items-center justify-center ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={elRef}
      type={type}
      onClick={onClick}
      data-cursor={cursorText}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-flex items-center justify-center cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
