import React, { useEffect, useRef, useState } from "react";
import Nav from './Nav'
import hamburgerImg from '../assets/images/NavBar.png'

export default function Header() {
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
      console.log('scroll')
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
        className={`w-full bg-mainDark border-b border-slate-200 transition-all duration-300 text-[10px] 
        ${isSticky
            ? "fixed top-0 left-0 z-50 shadow-lg animate-[slideDown_0.25s_ease-out]"
            : "relative"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div>
            <p className="text-[24px] md:text-[32px] font-IBMPlex font-medium text-white">
              <span className="text-accent pr-2">{'</>'}</span>
              Patryk
            </p>
          </div>
          <img src={hamburgerImg} alt="" width={40} height={40}/>
          <Nav />
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