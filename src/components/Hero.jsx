import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[90vh] grid place-items-center px-6 pt-10">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block">Hi, I’m</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Tanmay Paliwal 👋</span>
          </h1>
          <p className="mt-4 text-xl text-zinc-300">Aspiring Software Engineer</p>
          <p className="mt-4 max-w-xl text-zinc-400">
            I blend creativity and technology to build meaningful digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="relative inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-80 blur-md" />
              <span className="relative z-10">View My Work</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-cyan-300 border border-cyan-400/40 hover:bg-cyan-500/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="mx-auto h-64 w-64 sm:h-80 sm:w-80 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-[0_0_60px_rgba(99,102,241,0.25)]" />
          <div className="absolute -inset-6 -z-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-purple-600/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
