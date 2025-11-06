import React from 'react';
import { Download, Github, Mail } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-zinc-200/80 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md/50 bg-black/30 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-wide text-white">
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Tanmay Paliwal</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#skills">Skills</NavLink></li>
          <li><NavLink href="#projects">Projects</NavLink></li>
          <li><NavLink href="#experience">Experience</NavLink></li>
          <li><NavLink href="#certifications">Certifications</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:tanmaypaliwal2006@outlook.com"
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/tanmaypaliwal576"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="/Tanmay_Paliwal_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] hover:bg-cyan-500/20 transition-all"
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/10">
          <span className="sr-only">Open menu</span>
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M3 5h14a1 1 0 100-2H3a1 1 0 000 2zm14 4H3a1 1 0 000 2h14a1 1 0 100-2zm0 6H3a1 1 0 000 2h14a1 1 0 100-2z" clipRule="evenodd" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
