import React, { useEffect, useRef, useState } from "react";

export default function StickyHeaderDemo() {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerHeight]);

  return (
    <div className="bg-mainDark text-accent">
      <header
        ref={headerRef}
        className={`w-full bg-mainDark border-b border-slate-200 transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 z-50 shadow-lg animate-[slideDown_0.25s_ease-out]"
            : "relative"
        }`}
      >
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-slate-500">
              Demo React
            </p>
            <h1 className="text-2xl font-bold">
              {isSticky ? "Sticky header" : "Normalny header"}
            </h1>
          </div>

          <nav className="flex gap-4 text-sm font-medium">
            <a href="#start" className="hover:text-blue-600 font-IBMPlex">Start</a>
            <a href="#about" className="hover:text-blue-600 font-IBMPlex">O nas</a>
            <a href="#contact" className="hover:text-blue-600 font-IBMPlex">Kontakt</a>
          </nav>
        </div>
      </header>

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}