import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-xl shadow-black/20">
          <h2 className="text-3xl font-bold text-white">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I’m a full‑stack developer with a passion for crafting clean, glassmorphic interfaces and scalable backends. I love turning complex ideas into smooth, engaging experiences.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-white/60">Specialty</p>
              <p className="mt-1 font-semibold text-white">Frontend Engineering</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-white/60">Toolbox</p>
              <p className="mt-1 font-semibold text-white">React, Tailwind, Spline</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm text-white/60">Focus</p>
              <p className="mt-1 font-semibold text-white">UX, performance, aesthetics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
