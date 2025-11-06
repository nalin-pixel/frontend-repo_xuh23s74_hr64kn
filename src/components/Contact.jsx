import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl shadow-xl shadow-black/20">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-white/70">Have a project in mind? Let’s talk.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <input type="text" name="name" placeholder="Your name" required className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/50" />
            <input type="email" name="email" placeholder="Email" required className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/50" />
            <textarea name="message" placeholder="Message" rows="5" required className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/50"></textarea>
            <div className="flex items-center gap-4">
              <button type="submit" className="rounded-xl bg-white/90 text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-black/20 hover:bg-white transition">Send message</button>
              {status && <span className="text-sm text-emerald-300">{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
