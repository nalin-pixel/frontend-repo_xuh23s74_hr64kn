import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">
          <a href="#hero" className="px-4 py-2 text-lg font-semibold tracking-tight text-white/90">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">Flames</span>.Portfolio
          </a>
          <ul className="hidden md:flex items-center gap-2 p-2">
            <li>
              <a href="#about" className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">About</a>
            </li>
            <li>
              <a href="#projects" className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">Contact</a>
            </li>
          </ul>
          <a href="#contact" className="mr-3 hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition">
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
