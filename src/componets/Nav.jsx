import React from 'react';

export default function Nav() {
  function handleNavButtonClick(divId) {
    const elementById = document.getElementById(divId);

    if (elementById) {
      elementById.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      });
    }

  }

  return (
    <nav className="hidden md:flex gap-8 text-xl font-IBMPlex">
      <button type="button" className="hover:underline" onClick={handleNavButtonClick}>Start</button>
      <button type="button" className="hover:underline" onClick={() => handleNavButtonClick('about')}>O nas</button>
      <button type="button" className="hover:underline" onClick={() => handleNavButtonClick('contact')}>Kontakt</button>
    </nav>
  )
}