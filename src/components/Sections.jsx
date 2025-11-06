import React from 'react';
import { motion } from 'framer-motion';
import { Award, Book, Briefcase, Code2, Github, MapPin, Phone, Mail } from 'lucide-react';

const Section = ({ id, title, children }) => (
  <section id={id} className="relative py-20 px-6">
    <div className="mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      <div className="mt-10">
        {children}
      </div>
    </div>
  </section>
);

const GlassCard = ({ children, className = '' }) => (
  <div className={`relative rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(59,130,246,0.15)] ${className}`}>
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    {children}
  </div>
);

const Badge = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.25)]">
    {label}
  </span>
);

export default function Sections() {
  return (
    <>
      {/* About */}
      <Section id="about" title="About Me">
        <GlassCard>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4 text-zinc-300">
              <p>
                I’m Tanmay Paliwal, a motivated software engineering student with a passion for web development, AI, and building full‑stack experiences. I love solving problems and learning through hackathons and collaborative programming.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Engineering at NMIMS Indore (Aug 2024 – Jun 2028). I completed my Secondary Education at SGS Indore (2015 – 2024) and Primary Education at Advanced Academy Indore (2010 – 2014).
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-zinc-300"><Phone size={16} className="text-cyan-300" /> 6260153962</div>
              <a href="mailto:tanmaypaliwal2006@outlook.com" className="flex items-center gap-2 text-zinc-300 hover:text-white"><Mail size={16} className="text-cyan-300" /> tanmaypaliwal2006@outlook.com</a>
              <a href="https://github.com/tanmaypaliwal576" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-300 hover:text-white"><Github size={16} className="text-cyan-300" /> github.com/tanmaypaliwal576</a>
              <div className="flex items-center gap-2 text-zinc-300"><MapPin size={16} className="text-cyan-300" /> Indore, India</div>
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <GlassCard>
          <div className="flex flex-wrap gap-3">
            {[
              'HTML','CSS','JavaScript','React.js','Node.js','Express.js','MongoDB','Python','C++','Socket.IO','JWT','Pandas','NumPy','Matplotlib','Git','GitHub','OOP','Data Structures'
            ].map((s) => (
              <Badge key={s} label={s} />
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard>
            <h3 className="text-xl font-semibold text-white flex items-center gap-2"><Code2 size={18} className="text-cyan-300"/> Huddle (Chat App)</h3>
            <p className="mt-2 text-zinc-300">MERN chat app with Socket.IO for real-time messaging, JWT auth for secure sessions, and Arcjet middleware to mitigate cyber attacks. Crafted with a responsive, modern UI.</p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold text-white">Selective Repeat ARQ Simulator</h3>
            <p className="mt-2 text-zinc-300">Web-based simulator using HTML, CSS, and JS that demonstrates error control, retransmission logic, and sliding window protocol behavior.</p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold text-white">YouTube Clone</h3>
            <p className="mt-2 text-zinc-300">Front-end project built with HTML, CSS, and JS featuring a responsive video grid and interactive UI elements.</p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold text-white">FestX (College Fest Platform)</h3>
            <p className="mt-2 text-zinc-300">Hackathon-built platform to manage events, registrations, schedules, and leaderboards. Showcased at TuringFest 2025, NMIMS Indore, praised for innovation and UI.</p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-semibold text-white">Gemini Clone</h3>
            <p className="mt-2 text-zinc-300">Chatbot-style interface inspired by Gemini AI using HTML, CSS, and JS with a clean, responsive design.</p>
          </GlassCard>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <GlassCard>
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-cyan-500/20 border border-cyan-400/30 grid place-items-center text-cyan-300"><Briefcase size={18}/></div>
            <div>
              <h3 className="text-xl font-semibold text-white">Python Instructor · Samyak Computer Classes, Indore</h3>
              <p className="text-sm text-zinc-400">June 2024 – December 2024</p>
              <ul className="mt-3 list-disc list-inside text-zinc-300 space-y-1">
                <li>Taught Python programming fundamentals and best practices.</li>
                <li>Led hands-on sessions covering loops, data structures, and OOP.</li>
                <li>Guided students through projects and code reviews.</li>
                <li>Helped learners adopt professional workflows and version control.</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications">
        <GlassCard>
          <ul className="grid sm:grid-cols-2 gap-3 text-zinc-300">
            {[
              'Python for Beginners (Scaler)',
              'Bloomberg Finance Fundamentals (Bloomberg for Education)',
              'DSA in C++ (Udemy)',
              'Intro to Large Language Models (Simplilearn)',
              'React JS Course (Scaler)',
              'Gemini AI Clone Project (LetsUpgrade)',
              'Generative AI Certificate (upGrad & Microsoft)'
            ].map((c) => (
              <li key={c} className="flex items-start gap-2"><Award size={16} className="mt-0.5 text-cyan-300"/> <span>{c}</span></li>
            ))}
          </ul>
        </GlassCard>
      </Section>

      {/* Interests */}
      <Section id="interests" title="Interests">
        <GlassCard>
          <p className="text-zinc-300">
            Passionate about competitive programming, collaborative coding, artificial intelligence, and full‑stack development — with a constant drive to build impactful real‑world applications.
          </p>
        </GlassCard>
      </Section>
    </>
  );
}
