import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_50%_at_50%_0%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(45%_35%_at_80%_10%,rgba(244,114,182,0.2),transparent_60%)]" />

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl glass rounded-3xl p-8 md:p-10 border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/30">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/80">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              Available for freelance
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Building glassmorphic, modern web experiences
            </h1>
            <p className="mt-4 text-white/80 text-lg md:text-xl">
              I craft delightful frontends and robust backends — blending aesthetics with performance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-xl bg-white/90 text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-black/20 hover:bg-white transition">
                View Projects
              </a>
              <a href="#contact" className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
