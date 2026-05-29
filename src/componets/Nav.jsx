import React from 'react';

export default function Nav({ type, closeMobileMenu }) {
  const navClasses = type === 'mobile' ? 'flex flex-col text-left' : ''
  const linkClasses = type === 'mobile' ? 'text-left' : ''

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
    if (type === 'mobile') {
      closeMobileMenu();
    }
  }

  return (
    <nav className={`flex gap-8 text-xl font-IBMPlex ${navClasses}`}>
      <button type="button" className={`hover:underline ${linkClasses}`} onClick={handleNavButtonClick}>Start</button>
      <button type="button" className={`hover:underline ${linkClasses}`} onClick={() => handleNavButtonClick('about')}>About</button>
      <button type="button" className={`hover:underline ${linkClasses}`} onClick={() => handleNavButtonClick('contact')}>Contact</button>
    </nav>
  )
}