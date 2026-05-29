import React from "react";
import Nav from './Nav'

export default function MobileMenu({state, closeMobileMenu}) {
  return (
    <div className={`
        fixed inset-0 top-[88px] w-full bg-mainDark text-accent px-6 py-6
        transition-all duration-300 md:hidden
        ${state ? 'translate-x-0' : 'translate-x-full'}
      `}>
      <Nav type={'mobile'} closeMobileMenu={closeMobileMenu} />
    </div>
  )
}