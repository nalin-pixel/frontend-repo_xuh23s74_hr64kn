import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* subtle background grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-white/5 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} Flames • All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#projects" className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition">Work</a>
            <a href="#contact" className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
