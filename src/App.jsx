import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-zinc-100 scroll-smooth">
      {/* Ambient background gradients */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-10 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-indigo-700/30 via-purple-700/20 to-cyan-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[35rem] w-[35rem] rounded-full bg-gradient-to-tr from-cyan-600/20 via-indigo-700/20 to-purple-700/30 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Sections />
      <Contact />
    </div>
  );
}
