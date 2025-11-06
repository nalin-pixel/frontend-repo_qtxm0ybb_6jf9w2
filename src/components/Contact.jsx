import React from 'react';
import { Github, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Contact</h2>
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Name</label>
                <input type="text" required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name"/>
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Email</label>
                <input type="email" required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="you@example.com"/>
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Message</label>
                <textarea rows="5" required className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Say hello..."/>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-80 blur-md" />
              <span className="relative z-10 inline-flex items-center gap-2"><Send size={16}/> Send Message</span>
            </button>
          </form>

          <div className="space-y-4">
            <p className="text-zinc-300">I’m always excited to connect for opportunities, collaborations, or just to talk tech. Reach out and let’s build something awesome!</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/tanmaypaliwal576" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <Github />
              </a>
              <a href="mailto:tanmaypaliwal2006@outlook.com" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
                <Mail />
              </a>
            </div>
            <p className="text-xs text-zinc-500">© 2025 Tanmay Paliwal | Designed with ❤️ using AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
