// Header.jsx
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-0 py-3">

        <a
          href="#home"
          className="text-3xl  tracking-wide text-black dancing-script max-sm:text-lg max-sm:pl-5 max-2xl:pl-10"
        >
          M.Dinesh kumar
        </a>


        <ul className="hidden gap-15 text-lg text-black md:flex noto-serif max-2xl:gap-10 max-2xl:mr-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="transition hover:text-[#2E71FE]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="inline-flex items-center justify-center w-8 h-8 md:hidden max-sm:mr-5"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
            <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"></path><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"></path><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"></path><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"></path></g>
          </svg>
        </button>

      </nav>

      {open && (
        <ul className="flex flex-col gap-2 border-t bg-[#f5f5f5] px-4 pb-3 pt-2 text-sm font-semibold text-black md:hidden noto-serif ">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block w-full py-1 transition hover:text-gray-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
