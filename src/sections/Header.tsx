"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// Same order as the sections on the page
const navLinks = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience", short: "Work" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications", short: "Certs" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  // Highlight the section that has crossed the upper third of the viewport
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.35;
      let current = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.getBoundingClientRect().top <= line) current = link.id;
      }
      // Contact is short, so treat reaching the bottom of the page as being on it
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = navLinks[navLinks.length - 1].id;
      setActive(current);
      setScrolled(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 inset-x-0 z-50 px-2">
      <nav
        aria-label="Primary"
        className={twMerge(
          "flex gap-0.5 md:gap-1 p-0.5 max-w-full overflow-x-auto border border-white/15 rounded-full bg-white/10 backdrop-blur transition duration-300 [scrollbar-width:none]",
          scrolled && "bg-gray-900/70 border-white/20 shadow-[0_8px_30px_-10px] shadow-emerald-300/20"
        )}
      >
        {navLinks.map((link) => {
          const isActive = active === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActive(link.id)}
              aria-current={isActive ? "page" : undefined}
              className={twMerge(
                "nav-item relative z-0",
                isActive && "text-gray-900 hover:bg-transparent hover:text-gray-900"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {link.short ? (
                <>
                  <span className="md:hidden">{link.short}</span>
                  <span className="hidden md:inline">{link.label}</span>
                </>
              ) : (
                link.label
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
