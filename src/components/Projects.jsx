import React from 'react';

const projects = [
  {
    title: 'Glass Dashboard',
    desc: 'A translucent analytics dashboard with real-time charts and theme switching.',
    tags: ['React', 'Tailwind', 'Charts'],
    link: '#',
  },
  {
    title: 'AI Chat Studio',
    desc: 'Conversational UI with streaming responses and prompt tooling.',
    tags: ['FastAPI', 'WebSockets', 'OpenAI'],
    link: '#',
  },
  {
    title: '3D Product Showcase',
    desc: 'Interactive Spline scenes integrated into ecommerce flows.',
    tags: ['Spline', 'Vite', 'GSAP'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-white/70">A few projects that highlight my focus on craft and performance.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition">Work with me</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition shadow-lg shadow-black/20">
              <div className="h-40 w-full rounded-xl bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/10 to-indigo-400/20 mb-5" />
              <h3 className="text-xl font-semibold text-white group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-white/70">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
